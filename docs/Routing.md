### Routes

Since our entire application respects isomorphic rendering, we met a requirement that both the server and client requests share the same route configuration. Also we notice that nextJS has its own way of reading routes viz. by reading the files of a particular(pages) folder.

So to expose the same routes using our express layer we will read the file structure of the pages folder, add our own additional routes and pass it to express so that it listens and respects these routes when the request comes directly to these specified pages(rather than client side rendering).

Also, we notice that the pages configuration is shared, leading to a scenario that only the first request for a page is server side rendered, but subsequesnt routes are handled at the client side by fetching the page level JS and then fetching APIs directly on the client.

At this point server is only responsible to process requests for static assests only, no more rendering happens at the server for this particular user, unless hard reloaded.

To add new routes

* We just need to create a page file inside the pages folder and that is read by next as well as express(custom logic) and the route is exposed.
* But in case you need a custom route for a file, for instance, the category page has a file called `category.js` but we need the route to be exposed as `/category/:some-query/:catid` then we can specify the same to the next routes present in `/server/routes/pageRoutes.js`.
* You could also ignore some routes like \_document.js by just adding to the **fileExclusion** list in the same file.

**Note:** The file that we added in the pages should folder should export out a page level component, typically one that is wrapped with the enhance function.
