// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/luke/dev/git/ambition.wtf/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/luke/dev/git/ambition.wtf/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/luke/dev/git/ambition.wtf/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/luke/dev/git/ambition.wtf/.cache/json/layout-index.json"),
  "404.json": require("/Users/luke/dev/git/ambition.wtf/.cache/json/404.json"),
  "index.json": require("/Users/luke/dev/git/ambition.wtf/.cache/json/index.json"),
  "404-html.json": require("/Users/luke/dev/git/ambition.wtf/.cache/json/404-html.json")
}