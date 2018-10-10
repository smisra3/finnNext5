# Server-side Setup

### Our stack

| Name      | Description                                                                                                                                                                                           | External Links                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Node      | The LTS version of node which is 8.9.4 will be used in production                                                                                                                                     | https://nodejs.org               |
| NPM       | Node package manager will be used for dependency management of all node_modules. A wrapper of node as **yarn** from facebook will be used so that we could manage exact version between environments. | https://npmjs.org                |
| ExpressJS | ExpressJS framework used as a HTTP wrapper to process requests                                                                                                                                        | https://expressjs.com            |
| Next.JS   | Next.js is a minimalistic framework for server-rendered React applications. It provides code-splitting and therefore lazy-loading out of the box.                                                     | https://github.com/zeit/next.js/ |

### Environments

Environments are maintained as Development and Production using the environment files.
Each environment map could have various environment's data like DEV, CI, Stage, Prod-Stage or the Prod environemnt itself

There are 2 places in the codebase that take care of switching behaviour between environemnts - constants and env files.

They could have data varying from port, domain, API proxy, API timeouts, public URLs, private URLs among others

### API requests

API requests are treated differently by our fetch layer when requested from server or client.
All API requests that are recieved by the express layer will be going through middlewares to finally being proxied to the specified endpoint at the environment level.

The important thing to notice here is how we are taking care of session ID and other cookies when the server requests the API calls and when the client requests subsequent API calls.

Requests for APIs when rendering on the server will be as follows:

* Page request recieved
* Session ID requested/validated by making a hearbeat call
* No API requests are triggered yet, and the hearbeat call is a syncronous/blocking call and page rendering has not yet started
* Once SessionID recieved then all API requests triggered by triggering page level and global actions where the request cookies are passed inside the actions object, which traverses till the fetch layer.
* Cookies recieved in the action will now be attached to the Cookie object of fetch before the call is made.
* All API requests that are hit will be proxied by the express layer to the specified environment API URL

Requests for clients will be as follows:

* During the first page request the response will be setting all the cookies including sessionID into the browser cookies.
* All subsequent requests that are stateful will directly be hitting the ATG layer rather that being proxied by the express layer
* Requests by default will have the session cookie all requests are entertained accordinly
* Absense of a session cookie/ invalidated session cookie will now be sent back by ATG with an active session cookie.
* But all stateless calls are still proxied via the express layer.

Note: The logic for the same can be present inside the `server/index.js` and `server/utils/sessionHeartbeat.js`

### Next JS

Next.js is a minimalistic framework for server-rendered React applications. It provides code-splitting and therefore lazy-loading out of the box. It internally takes care of a lot of boilerplate including state transfer and developing react components without the need to take care of rendering environment.

The first load of the page is server side rendered, but subsequent routes are handled at the client side by fetching the Javascipt bundle for a particular page using the context API, it should also be noted that next JS bundles at a page level. APIs too are fetched directly on the client side. At this point server is only responsible to process requests for static assests only, no more rendering happens at the server for this particular user, unless hard reloaded.

### Server side API calls

All API calls that are triggered during SSR are proxied at the express layer.

One very important approach that was taken during handling of these requests was that if all these requests were individually triggered then each of them would be having its own `sessionID` which would be wrong since all these requests were triggered by a single request.

To avoid this we will get a unique `sessionID` for a page level request if it already doesnt have. Once a unique session ID is created then all requests for this particular page level request will have the same `sessionID`. Alongside this we will also be sending back this unique `sessionID` as part of the response cookie for this page request so that subsequent calls will carry it along.

### Store hydration

As the initial page load is server rendered, then the redux store that was created as part of this request needs to be hydrated back to the client so that the mounting of components happens using the state that was present on the server

Also there would be some page level attributes that need to be part of the store that are added when the request was recieved, for instance the sessionID, page level IDs, Site IDs, request device type etc ...

All these are part of the store that next JS takes care for us by creating the inital store by picking from the document where the store was passed as a global variable as **\_\_next.store**

Device detection: Some modules/middlewares are attached to handle the requests and assign a particular value into the store, these actions are triggered only on the server side and they will continue on the client for the entire session unless explicitly removed

## Dev tools

Because we are developers and we love DX!!

We added some tools for debugging as well as to generate reports for our performance.

```
P.S.: DX === Developer Xperience
//true
```

The following tools are at your disposal that have already been integrated, non functional requirements can be closed with all these tools

* Lighthouse - can be run by calling `npm run <any-command> --report
* webpack-bundle-analyzer - runs on dev, and creates a report
* Eslint - Added as a pre commit hook using husky
* StyleLint - Added as a pre commit hook using husky
* Esdoc - Documentation generator
* CannedJS - Mock server while developing locally, can be run by running the command `npm run dev:mock`

## Universal modules

Since next generates bundles that are isomorphic meaning the js files have to be compatible enough for both server side rendering(node layer) and client side rendering(browser). Ideally this is possible.

But we do come across some modules that are meant to be run only on one of the layers, for instance, winston which we use for logging uses the fs module to write logs onto a file. But since fs is not available on the browser, and to avoid unwanted modules to be bundled on the client bundles, we create a mock file that exports a noop function. We also create a alias in the next.config.js so that when webpack resolves it, it picks the fake module meant for the browser.

### Custom middlewares

* APIProxy - Picks environemnt API domain and proxies all call that express recieves starting with /api to the specified domain
* checkDirectory - Simple utility to check if file exists in fs before writing to it.
* configKeys - BCC configuration picks from the mem-cache
* logger - Perf logger, an instance of the winston logger.
* perfCalc - Calculates the time taken by individual request for them to get fulfilled.
* sessionHeartbeat - Verifies that the page level request has an active session, else creates a new one by calling sessios.jsp
