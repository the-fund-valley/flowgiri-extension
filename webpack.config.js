let builder = require("bundle-master")


module.exports =  builder
.postCss("resources/css/app.css", "assets/css/app.css")
.js("resources/js/app.js", "assets/js/app.js")
.init();