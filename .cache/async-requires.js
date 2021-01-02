// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/luke/dev/git/ambition.wtf/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/luke/dev/git/ambition.wtf/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/luke/dev/git/ambition.wtf/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/luke/dev/git/ambition.wtf/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/luke/dev/git/ambition.wtf/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/luke/dev/git/ambition.wtf/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/luke/dev/git/ambition.wtf/.cache/layouts/index.js")
}