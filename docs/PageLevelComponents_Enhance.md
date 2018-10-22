# Enhance

Enhance is a one of the crucial utility methods that this framework provides. All page level component need to be wrapped within this method as shown here

```js
import enhance from '/app/lib/dynamicStore';
import saga from './Page.saga'; // Root saga that listens to all individual saga effects
import reducer from './Page.reducer'; // Root reducer after using individual reducers with combineReucers from redux-immutable
import initialActions from './Page.actions'; //All actions that need to be triggered during page load

class Page extends PureComponent{
    render(){

    }
    .
    .
    //component definition and lifecycle methods come here
}

const mapStateToProps = state => ({
  configKeys: state.getIn(['global', 'globalData', 'configKeys']),
});

export default enhance(HomePage, {
  mapStateToProps,
  saga,
  reducer,
  key: 'uniquePageName',
  initialActions,
});
```

- `enhance` function is used here which creates a High Order Component over the provided page level component and connects itself to a Redux store.
- It internally has the definition of the `getInitialProps` function which will synchronously be called by Next.js which has access to store and request objects from server.
- The High Order Component which injects the global reducer and saga (if any) that are associated with that page level component in its `getInitialProps` lifecycle hook.
- It also then waits for the page level sagas (explained below) to yield. We have a `monitorSagas` function which will wait till the `done` property of all running sagas are resolved/rejected.
- `enhance` function basically creates a High Order Component and connects it to the redux store taking in `mapStateToProps` and `mapDispatchToProps`.

### It's responsibilities

- Injects the page level reducer and saga that was passed to it. One thing to note here is that the inital load on server will add only that page's saga and reducer. Then on subsequent calls of page routing on the client, the new saga andreducer that comes in will be injected and replaced.
- Checks if the WrappedComponent that we passed to it has a `getInitialProps` and calls that and waits on that too.
- Defines the `getInitialProps` that gets called by nextJS, that waits for all API calls to be resolved before the start of the rendering.
- Checks if the crucialDataStructure that was specified was resolved properly before rendering, if not it will take you to a error page

### Concept of layout component

We wrap all our page level components into a HOC called the layout, what layout basically does is add the common header and footer for all pages and renders the children passed to it. It also adds the theme provider, so that all children components have access to the theme object when wrapping the component with `withStyles`.

For instance, the home page which has the common header and common footer, so we define it like this:

```js
// @flow
import { PureComponent } from 'react';

import Layout from '../Layout';
import enhance from '../../../lib/dynamicStore';

class HomePage extends PureComponent<Props> {
  render() {
    return (
      <Layout title="home">
        // Add all home page components here by defining or importing
      </Layout>
    );
  }
}

export default enhance(HomePage, {
  key: 'homePage'
});
```

When we see the definition of Layout we will see that it simply takes children and adds header and footer

```js
const Layout = ({
  children,
  deviceType,
  isNavigationDrawerOpen,
  topBanner
}: Props): Node => {
  // `deviceType` is now accessible to all component styles using `props.theme.deviceType`
  Theme.deviceType = deviceType;
  API.setDeviceType(deviceType);

  return (
    <ThemeProvider theme={Theme}>
      <div>
        {deviceType === DESKTOP ? <TopBanner content={topBanner} /> : null}
        <LayoutElement
          deviceType={deviceType}
          isNavigationDrawerOpen={isNavigationDrawerOpen}
          className="container-fluid"
        >
          <Header />
          <main className="row">{children}</main>
          <UpperFooter />
          <Footer />
        </LayoutElement>
      </div>
    </ThemeProvider>
  );
};
```

#### **getInitialProps**

When you need state, lifecycle hooks or initial data population you can export a React.Component (instead of a stateless function, like shown above):

```js
import React from 'react';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    return <div>Hello World {this.props.userAgent}</div>;
  }
}
```

Notice that to load data when the page loads, we use getInitialProps which is an async static method. It can asynchronously fetch anything that resolves to a JavaScript plain Object, which populates props.

Data returned from getInitialProps is serialized when server rendering, similar to a JSON.stringify. Make sure the returned object from getInitialProps is a plain Object and not using Date, Map or Set.

For the initial page load, getInitialProps will execute on the server only. getInitialProps will only be executed on the client when navigating to a different route via the Link component or using the routing APIs.

Note: getInitialProps can not be used in children components. Only in pages.

If you are using some server only modules inside getInitialProps, make sure to import them properly. Otherwise, it'll slow down your app.

You can also define the getInitialProps lifecycle method for stateless components:

```js
const Page = ({ stars }) => <div>Next stars: {stars}</div>;

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Page;
```

getInitialProps receives a context object with the following properties:

```
pathname - path section of URL
query - query string section of URL parsed as an object
asPath - String of the actual path (including the query) shows in the browser
req - HTTP request object (server only)
res - HTTP response object (server only)
jsonPageRes - Fetch Response object (client only)
err - Error object if any error is encountered during the rendering
```

** Additional Layer on top of what nextJS provides **

Whenever you wrap your component around the enhance method of this framework, we add a higher order component that will have the base `getInitialProps` whose function is to trigger all initial API calls that the page level component needs to trigger.

By adding this layer we actually overtook the flexibility that your page level component can add to the getInitialProps async method that is completed before the page starts rendering. We didnt want to do that right? Developer freedom is important. So what we did was check if your page has a static `getInitialProps` and we call that after our calls are finished. This way you do not worry about the method that next provides you. It is still available for any page level components.

### Concept of initialActions and globalActions

In most of our cases what we have is that the rendering of our page needs to hold on until any of the data that it depends on is resolved, it might come from an API of some internal calculation. To get this data ready what we do is trigger page level actions that will get all the data for this page to be rendered, be it serverside or client side.

This is the flow of how such actions are specified and how they are triggered

- These actions are triggered by `getInitialProps` that is defined in the enhace function.
- The global actions will be defined in the global folder as an array of action creators.
- The page level actions that differ from page to page are now passed on when we wrap the page level component into the enhance method.
- These actions could be a string or an array of actionCreators that have actions in them that are dispatched into the redux store.
- Typically such actions are usually ones that fetch data from an API.
- Our monitor sagas waits for all sagas to be resolved before returning from the `getInitialProps`, and only after that is when the rendering of the page starts.

Here is an example of how we accumulate the page level action

```js
import { LOAD_HOME_SEO } from './HomePage.constants';

import { loadHomePageEditorial } from '../../organisms/Editorial/Editorial.actions';

export const loadHomeSeo = (): LoadSeoDataAction => ({ type: LOAD_HOME_SEO });

export default [loadHomeSeo, loadHomePageEditorial];
```

See how we accumulated and exported an array of actionCreators, some have been defined here and others come from organisms that need some initial data to render.

### Concept of useQuery

We realised that in some of our cases we want the query from the URL that the user is hitting, and only then will we able to fetch that data for that page, as it is dependent on the user's choice. One big example of it is the category data that we may require, and that depends on what category page the user has opened.

Now to fetch the initialData that is triggered by initialAction, the URL that this saga hits will need the category ID from the URL that is available to us in the `getInitialProps` which we will be passing into the action creators that will be called there. And those actions can use the query object that it recieved to send data to saga that fetches the right data.

**Note: ** By default the useQuery is turned off and the query will not be sent into actions. For actions to recieve the query you need to turn the flag on while calling the enhace method like this

```js
export default enhance(HomePage, {
  key: 'homePage',
  initialActions,
  useQuery: true
});
```

### Concept of global reducer, saga, actions

Apart from the page level reducer, page level saga and initialActions we also have the global components for header, navigation, footer, upperfooter, chat, etc ...

And we dont want to keep defining them repeatedly for all pages. The component definitions are present in the organisms and finally wrapped in the layout component. But anything asynchrous or data pertaining operations for them that are associated with global data coming in from global reducer, saga and actions are present in the global folder in `/app/global`.

These are imported into the enhance method and automatically added for all layouts.
