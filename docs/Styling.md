# Styling and Theming

## Availability of themes & deviceType inside style

Since this codebase repects theme based deployment, we need to specify any style that is theme level into the themes folder and then only use in the component specific styles.

And inside each of our styles we will read the same theme that was exported out and use them. To help us achieve this we follow styled-components way of handling themes: styled-components has full theming support by adding a `<ThemeProvider>` wrapper component. This component provides a theme to all React components underneath itself via the context API. In the render tree all styled-components will have access to the provided theme, even when they are multiple levels deep.

The theme object is defined and is by default imported and used with the themeProvider inside the layout js which has all the page level components already specified.

```js
// The theme object should have all properties of this theme
// Theme.js

export default (theme = {
  mainColor: 'black',
  border: '1px solid red'
});

// Layout
import theme from '../path/to/theme';

<ThemeProvider theme={theme}>
  <Layout>this.props.children</Layout>
</ThemeProvider>;
```

For any component to receive the theme object as props we will need to wrap that component with the `withStyles` method provided by styles components.

```js
import { withTheme } from 'styled-components';

class MyComponent extends React.Component {
  render() {
    console.log('Current theme: ', this.props.theme);
    // ...
  }
}

export default withTheme(MyComponent);
```

For instance we wanted a button to look different for different region, then we need to use properties from the theme object like this

```js
import { css } from 'styled-components';
// Define our button styles as a string literal by wrapping the styles inside the css method that styled-component provides,
//See how props.theme is available for this component

export const ButtonStyles = css`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.mainColor */
  color: ${props => props.theme.mainColor};
  border: 2px solid ${props => props.theme.border};
`;
```

## Segregation of styles for mobile and desktop(faking adaptive)

The biggest advantage of using styled components is that, the css that is added as a style tag contins only the styles of the components that are rendered on the page. WOW!! This way are styles that are present reduces drastically. And the other part is that nextJS bundles page specific styles so this way, our page level styles are also now lightweight.

To achieve this what we did was created a utility called **withStyles** which picks the device type that is set into the theme in our layoutjs file.

##### withStyles functionality

What withStyles does is read the deviceType from theme and matches that to the the key present in the styles object of the component. If it is absent them it picks the entire css for both mobile and desktop, assuming it is common css.

```js
import { css } from 'styled-components';

import { DESKTOP, MOBILE } from '../../../constants';

const commonStyles = css`
  border: 1px solid ${props => props.theme.darkGrey1};
  padding: 0 10px;
  width: 100%;

  .tooltip {
    padding: 0;
    cursor: pointer;
  }
`;

export default {
  [DESKTOP]: css`
    ${commonStyles};

    > h3 {
      display: none;
    }

    > h4 {
      margin: 10px 0 16px 0;
    }
  `,
  [MOBILE]: css`
    ${commonStyles};
    border: none;

    > h3 {
      margin: 10px 0;
      background-color: ${props => props.theme.backgroundGrey};
    }
  `
};
```

See how we separated the common styles and used them for individual devices. Exporting an object that has no keys will be assumed that it is only common CSS for both mobile and desktop so the entire css will be loaded when this component renders on the page.

## How withstyles picks the correct styles for inherited styles

The withStyles utility takes care even of the `inheritedStyles` that are present in the child components.

For instance you wrote a molecule that uses an atom.
Now you want to write device specific styles for the molecule then we can do it as shown above, but if we want to write device specific styles for the styles that we are gonna pass to the child atom, then we can do the same by passing the props as styles and those styles are defined device specific.

```js
//molecule.style.js

import {DESKTOP, MOBILE} from 'constants';
import {css} from 'styled-components'

const atomStyles = {
    [DESKTOP]: css`display:block`;
    [MOBILE]: css`display:inline-block`;
}

//molecule.js
import Button from 'atom/button';
import atomStyles from './molecule.style.js';


<Button inheritedStyles={atomStyles}>I am button</Button>
```

Device specific styles will be picked if the inherited styles are also written in the same fashion

## Handling global styles

In some cases we would want to write some styles as global from within the component or in our global styles present here: `/app/styles/globalStyles.js`;

This way it is made sure that the styles are not scoped to the component and the class name will not be transformed, but will be used as is into the style sheet.

A good example to use this is when we are adding any classes via javascript where we would expext the name of the class to be same and not scoped for the component.

To achieve this we use the method provided by styled-components

injectGlobal : A helper method to write global CSS. It does not return a component, but adds the styles to the stylesheet directly.

```js
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Operator Mono';
    src: url('../fonts/Operator-Mono.ttf');
  }

  body {
    margin: 0;
  }
`;
```

We do not encourage the use of this. Try to use it once per app at most, if you must, contained in a single file. This is an escape hatch. Only use it for the rare @font-face definition or body styling.
