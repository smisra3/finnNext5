## Page Flow

![alt text](./img/pageFlow1.svg 'Atomic Design')

As shown in the representation above – initial request from the browser to the application for the page request will be handled by the Experience Assembler which will:

1.  Create a High Order Component with the route matched page level component using `enhance` function passing in the the reducers/sagas/initial actions associated with the page. Then trigger page level actions picked up by the Async flow controller - sagas (explained below)
2.  Respective services bound to the async controller will be involved through the API handler
3.  Store is updated and selected properties passed to the page template
4.  Page HTML generated on the server-side and sent to the browser

Subsequent page requests post the initial load will be handled through client-side navigations which will:

5.  Match route to container through the config present on the client side
6.  Lazy load the page-level additional assets (JS/CSS)
7.  Create a High Order Component with the route matched page level component using `enhance` function passing in the the reducers/sagas/initial actions associated with the page. Trigger page level actions picked up by the Async flow controller - sagas (explained below)
8.  Respective services bound to the async controller will be involved through the API handler
9.  Store is updated and selected properties passed to the page template
10. New page is rendered on the DOM

### enhance

- The page level components in the templates folders have following tasks to perform
  - Connect itself to Redux store
  - Inject global reducers and reducers associated with page dynamically
  - Inject page level sagas dynamically
  - Initiate page level actions and then wait for any sagas to yield if any
- A custom `enhance` function is used here which creates a High Order Component over the provided page level component and connects itself to a Redux store. It has access to the `getInitialProps` function injected by Next.js with access to store and request objects from server. It also then waits for the page level sagas (explained below) to yield. We have a `monitorSagas` function which will wait till the `done` property of all running sagas are resolved/rejected.
- `enhance` function then creates a High Order Component and connects it to the redux store taking in `mapStateToProps` and `mapDispatchToProps`.
- It also creates another High Order Component which injects the global reducer (if any) and the reducers associated with that page level component in the store in its `componentWillMount` lifecycle hook.
- Further, another High Order Component is created which injects corresponding rootSaga for the page in its `componentWillMount` lifecycle hook. It also cancels all running tasks if any in its `componentWillUnmount` lifecycle hook before page is being navigated away thus keeps things isloted.
- The three components are then composed using redux's composition.
- The resultent component is then mounted in the app.
- The page level components make use of other lower level components such as `organisms` (which are smart components) and `atoms` & `molecules` (which are dumb components).
- `enhance` function is only for page level components. `organisms` level components are connected to store using the `connect` function provided by react-redux.
- All attributes are then passed to `atoms` & `molecules` via props by `organisms` and `templates`.
