// Define all routes here.
// Apart from the ones in the list below - the default routes are
// picked from the "pages" directory

module.exports = {
  baseRoutes: {
    index: "/"
  },

  additionalRoutes: {
    error: "/:page",
    login: "/login/:slug"
  },

  fileExclusionList: ["_document.js", "index.js", "error.js"]
};
