# <Project Name>

## Features 🎉

- Server-side rendering with code-spliting (comes out of the box from Next.js)
- Redux + Redux-Saga for state management
- Reselect for optimizations
- Dynamic reducer/saga injection
- Javascript and styles linting
- Component scaffolding
- App audit using lighthouse and sitespeed
- Documentation generator
- Flow type checking ready
- Storybook integrated with react-live playground
- Jest testing framework with snapshot testing

## Topics to refer

- [TechStack](docs/TechStack.md)
- [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
- [Page Flow](docs/PageFlow.md)
- [Page Level Components(Enhance)](docs/PageLevelComponents_Enhance.md)
- [Folder Structure](docs/FolderStructure.md)
- [Component](docs/Component.md)
- [Styling](docs/Styling.md)
- [Logger](docs/Logger.md)
- [Development Tools](docs/DevelopmentTools.md)
- [Server Side Setup](docs/ServerSideSetup.md)
- [Services and Mocks](docs/ServicesMocks.md)

## Installation

Dependencies should be installed using the [`yarn`](https://yarnpkg.com/en/)
command line tools.

Install `yarn` if you dont't have already.

```sh
npm i -g yarn
```

Install dependencies using `yarn`.

```sh
yarn install
```

## Development Environment

Start development environment with mock server using

```sh
yarn run dev:mock
```

## Scripts

- **dev** - Install dependencies and serve in development environment
- **dev:mock** - Same as **dev** but also start canned mock server parallelly (port 9876)
- **prod** - Install dependencies, make a production build, run size check on webpack bundles and serve in production environment
- **build** - Make production build
- **start** - Same as **prod**
- **lint** - Run javascript linting and style linting. (Also used as a precommit hook)
- **test** - Run jest test suites wiht snapshot testing. (Also used a a prepush hook)
- **audit** - Same as prod but also does an lighthouse audit on the served app followed by sitespeed audit, eventually shutting the server after reports are generated
- **storybook** - Run storybook server (port 9001)
- **doc** - Create function documentation using esdoc
- **generate** - Used for scaffolding components. (Refer scaffolding section)
- **flow** - Start a flow server

```sh
{
    "dev": "yarn install && yarn run dev:serve",
    "dev:mock": "yarn install && npm-run-all --parallel dev:serve mock",
    "prod": "yarn install && yarn run build && yarn run size && yarn run prod:serve",
    "build": "next build ./app",
    "start": "yarn run prod",
    "lint": "yarn run lint:js && yarn run lint:css",
    "flow": "flow",
    "test": "cross-env NODE_ENV=test jest --config ./config/jest.config.js",
    "audit": "yarn run start -- --report",
    "storybook": "start-storybook -p 9001 -c .storybook",
    "doc": "esdoc",
    "generate": "plop --plopfile generators/index.js",
    "dev:serve": "node ./server/index.js",
    "prod:serve": "cross-env NODE_ENV=production node ./server/index.js",
    "mock": "canned -p 9876 ./mock",
    "lint:js": "eslint app/ server/ --fix",
    "lint:css": "stylelint app/",
    "docgen": "react-docgen ./app --pretty",
    "precommit": "yarn run lint",
    "prepush": "yarn run test",
    "size": "size-limit"
  }
```

## Tests

```sh
yarn test
```
