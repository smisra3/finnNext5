## [React](https://github.com/facebook/react)

React is a JavaScript library for building user interfaces.

* Declarative - React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
* Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
* Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

## [Redux](https://github.com/reactjs/redux/)

Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

You can use Redux together with React, or with any other view library.
It is tiny (2kB, including dependencies).

## [Redux-Saga](https://github.com/redux-saga/redux-saga)

`redux-saga` is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, simple to test, and better at handling failures.
It uses an ES6 feature called Generators to make those asynchronous flows easy to read, write and test.

## [Next.js](https://github.com/zeit/next.js/)

Next.js is a minimalistic framework for server-rendered React applications. It provides code-splitting and therefore lazy-loading out of the box. It internally takes care of a lot of boilerplate including state transfer and developing react components without the need to take care of rendering environment.

## [Reselect](https://github.com/reactjs/reselect)

Reselect is a “selector” library for Redux. Reselect helps build memoized selectors which are functions that retrieve snippets of the Redux state for our React components. Using memoization, we prevent unnecessary re-renders and re-calculations of derived data, which in turn speeds up our application.

* Selectors can compute derived data, allowing Redux to store the minimal possible state.
* Selectors are efficient. A selector is not recomputed unless one of its arguments change.
* Selectors are composable. They can be used as input to other selectors.

## [Styled Components](https://github.com/styled-components/styled-components)

`style-components` is a CSS-in-JS library that removes the mapping between components and styles by allowing us to define our styles within the component itself by utilizing tagged template literals. Thus making components the fundamental way to build a styled UI.

## [Immutable.js](https://github.com/facebook/immutable-js/)

Immutable data cannot be changed once created, leading to much simpler application development, no defensive copying, and enabling advanced memoization and change detection techniques with simple logic. Persistent data presents a mutative API which does not update the data in-place, but instead always yields new updated data.

Immutable.js provides many Persistent Immutable data structures including: List, Stack, Map, OrderedMap, Set, OrderedSet and Record.

These data structures are highly efficient on modern JavaScript VMs by using structural sharing via hash maps tries and vector tries as popularized by Clojure and Scala, minimizing the need to copy or cache data.

Immutable.js also provides a lazy Seq, allowing efficient chaining of collection methods like map and filter without creating intermediate representations. Create some Seq with Range and Repeat.

## [normalizr](https://github.com/paularmstrong/normalizr)

Many APIs, public or not, return JSON data that has deeply nested objects. Using data in this kind of structure is often very difficult for JavaScript applications, especially those using Flux or Redux.

Normalizr is a small, but powerful utility for taking JSON with a schema definition and returning nested entities with their IDs, gathered in dictionaries.

## Other Node Packages (Dependencies)

* [babel-cli](https://ghub.io/babel-cli): Babel command line.
* [babel-preset-flow](https://ghub.io/babel-preset-flow): Babel preset for all Flow plugins.
* [compression](https://ghub.io/compression): Node.js compression middleware
* [cookie-parser](https://ghub.io/cookie-parser): cookie parsing with signatures
* [cross-env](https://ghub.io/cross-env): Run scripts that set and use environment variables across platforms
* [dotenv](https://ghub.io/dotenv): Loads environment variables from .env file
* [es6-promise](https://ghub.io/es6-promise): A lightweight library that provides tools for organizing asynchronous code
* [eslint-import-resolver-babel-module](https://ghub.io/eslint-import-resolver-babel-module): babel-plugin-module-resolver resolver for eslint-plugin-import
* [express](https://ghub.io/express): Fast, unopinionated, minimalist web framework
* [express-device](https://ghub.io/express-device): Browser detection library, built on top of express
* [flow-bin](https://ghub.io/flow-bin): Binary wrapper for Flow - A static type checker for JavaScript
* [flow-typed](https://ghub.io/flow-typed): A repository of high quality flowtype definitions
* [hoist-non-react-statics](https://ghub.io/hoist-non-react-statics): Copies non-react specific statics from a child component to a parent component
* [http-proxy-middleware](https://ghub.io/http-proxy-middleware): The one-liner node.js proxy middleware for connect, express and browser-sync
* [immutable](https://ghub.io/immutable): Immutable Data Collections
* [invariant](https://ghub.io/invariant): invariant
* [ip](https://ghub.io/ip): Ann Taylor
* [isomorphic-unfetch](https://ghub.io/isomorphic-unfetch): Switches between unfetch &amp; node-fetch for client &amp; server.
* [lodash](https://ghub.io/lodash): Lodash modular utilities.
* [next](https://ghub.io/next): Minimalistic framework for server-rendered React applications
* [next-redux-saga](https://ghub.io/next-redux-saga): redux-saga HOC for Next.js
* [next-redux-wrapper](https://ghub.io/next-redux-wrapper): Redux wrapper for Next.js
* [next-routes](https://ghub.io/next-routes): Easy to use universal dynamic routes for Next.js
* [normalizr](https://ghub.io/normalizr): Normalizes and denormalizes JSON according to schema for Redux and Flux applications
* [prop-types](https://ghub.io/prop-types): Runtime type checking for React props and similar objects.
* [react](https://ghub.io/react): React is a JavaScript library for building user interfaces.
* [react-aria-modal](https://ghub.io/react-aria-modal): A fully accessible and flexible React modal built according WAI-ARIA Authoring Practices
* [react-dom](https://ghub.io/react-dom): React package for working with the DOM.
* [react-immutable-proptypes](https://ghub.io/react-immutable-proptypes): PropType validators that work with Immutable.js.
* [react-redux](https://ghub.io/react-redux): Official React bindings for Redux
* [react-router-dom](https://ghub.io/react-router-dom): DOM bindings for React Router
* [react-slick](https://ghub.io/react-slick): React port of slick carousel
* [redux](https://ghub.io/redux): Predictable state container for JavaScript apps
* [redux-devtools-extension](https://ghub.io/redux-devtools-extension): Wrappers for Redux DevTools Extension.
* [redux-immutable](https://ghub.io/redux-immutable): redux-immutable is used to create an equivalent function of Redux combineReducers that works with Immutable.js state.
* [redux-logger](https://ghub.io/redux-logger): Logger for Redux
* [redux-saga](https://ghub.io/redux-saga): Saga middleware for Redux to handle Side Effects
* [reselect](https://ghub.io/reselect): Selectors for Redux.
* [slick-carousel](https://ghub.io/slick-carousel): the last carousel you&#39;ll ever need
* [styled-components](https://ghub.io/styled-components): Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅
* [sw-precache-webpack-plugin](https://ghub.io/sw-precache-webpack-plugin): Webpack plugin for using service workers
* [uglifyjs-webpack-plugin](https://ghub.io/uglifyjs-webpack-plugin): UglifyJS plugin for webpack
* [winston](https://ghub.io/winston): A multi-transport async logging library for Node.js

## Dev Dependencies

* [@storybook/addon-storyshots](https://ghub.io/@storybook/addon-storyshots): StoryShots is a Jest Snapshot Testing Addon for Storybook.
* [@storybook/react](https://ghub.io/@storybook/react): Storybook for React: Develop React Component in isolation with Hot Reloading.
* [autoprefixer](https://ghub.io/autoprefixer): Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website
* [babel](https://ghub.io/babel): Turn ES6 code into readable vanilla ES5 with source maps
* [babel-eslint](https://ghub.io/babel-eslint): Custom parser for ESLint
* [babel-plugin-module-alias](https://ghub.io/babel-plugin-module-alias): Babel plugin to rewrite the path in require() and ES6 import
* [babel-plugin-module-resolver](https://ghub.io/babel-plugin-module-resolver): Module resolver plugin for Babel
* [babel-plugin-styled-components](https://ghub.io/babel-plugin-styled-components): Improve the debugging experience and add server-side rendering support to styled-components
* [babel-plugin-wrap-in-js](https://ghub.io/babel-plugin-wrap-in-js): Babel plugin to wrap file in an exported js string
* [canned](https://ghub.io/canned): serve canned responses to mock an api, based on files in a folder
* [enzyme](https://ghub.io/enzyme): JavaScript Testing utilities for React
* [enzyme-adapter-react-16](https://ghub.io/enzyme-adapter-react-16): JavaScript Testing utilities for React
* [esdoc](https://ghub.io/esdoc): Good Documentation Generator For JavaScript
* [esdoc-ecmascript-proposal-plugin](https://ghub.io/esdoc-ecmascript-proposal-plugin): A ECMAScript proposal plugin for ESDoc
* [esdoc-flow-type-plugin](https://ghub.io/esdoc-flow-type-plugin): A flow type plugin for ESDoc [PoC]
* [esdoc-jsx-plugin](https://ghub.io/esdoc-jsx-plugin): A JSX plugin for ESDoc
* [esdoc-react-plugin](https://ghub.io/esdoc-react-plugin): A React plugin for ESDoc [PoC]
* [esdoc-standard-plugin](https://ghub.io/esdoc-standard-plugin): A standard plugin for ESDoc
* [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
* [eslint-config-airbnb](https://ghub.io/eslint-config-airbnb): Airbnb&#39;s ESLint config, following our styleguide
* [eslint-plugin-flowtype](https://ghub.io/eslint-plugin-flowtype): Flowtype linting rules for ESLint.
* [eslint-plugin-import](https://ghub.io/eslint-plugin-import): Import with sanity.
* [eslint-plugin-jest](https://ghub.io/eslint-plugin-jest): Eslint rules for Jest
* [eslint-plugin-jsx-a11y](https://ghub.io/eslint-plugin-jsx-a11y): Static AST checker for accessibility rules on JSX elements.
* [eslint-plugin-react](https://ghub.io/eslint-plugin-react): React specific linting rules for ESLint
* [eslint-plugin-redux-saga](https://ghub.io/eslint-plugin-redux-saga): redux-saga eslint rules
* [husky](https://ghub.io/husky): Prevents bad commit or push (git hooks, pre-commit/precommit, pre-push/prepush, post-merge/postmerge and all that stuff...)
* [inquirer](https://ghub.io/inquirer): A collection of common interactive command line user interfaces.
* [jest](https://ghub.io/jest): Delightful JavaScript Testing.
* [jsdoc](https://ghub.io/jsdoc): An API documentation generator for JavaScript.
* [lighthouse](https://ghub.io/lighthouse): Lighthouse
* [npm-run-all](https://ghub.io/npm-run-all): A CLI tool to run multiple npm-scripts in parallel or sequential.
* [plop](https://ghub.io/plop): Micro-generator framework that makes it easy for an entire team to create files with a level of uniformity
* [postcss-import](https://ghub.io/postcss-import): PostCSS plugin to import CSS files
* [postcss-loader](https://ghub.io/postcss-loader): PostCSS loader for webpack
* [raw-loader](https://ghub.io/raw-loader): raw loader module for webpack
* [react-docgen](https://ghub.io/react-docgen): A CLI and toolkit to extract information from React components for documentation generation.
* [react-live](https://ghub.io/react-live): A production-focused playground for live editing React code
* [stylelint](https://ghub.io/stylelint): A mighty, modern CSS linter.
* [stylelint-config-standard](https://ghub.io/stylelint-config-standard): Standard shareable config for stylelint
* [stylelint-config-styled-components](https://ghub.io/stylelint-config-styled-components): A shareable stylelint config for stylelint-processor-styled-components
* [stylelint-processor-styled-components](https://ghub.io/stylelint-processor-styled-components): A stylelint processor for styled-components
