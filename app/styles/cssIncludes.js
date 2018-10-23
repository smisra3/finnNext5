const cssIncludes = [];

if (process.env.NODE_ENV === 'development') {
  cssIncludes.push(
    "/static/styles/vendor/normalize.css",
    "/static/styles/font-awesome.min.css",
    "/static/styles/icons/icomoon.css",
    "/static/styles/vendor/flexboxgrid.css",
    "/static/styles/main.css",
    '/static/styles/vendor/slick.css',
    '/static/styles/vendor/slick-theme.css'
  );
}

export default cssIncludes.map((src, index) => ({
  id: `css-include-${index}`,
  src,
}));
