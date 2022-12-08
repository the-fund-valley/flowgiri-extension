let builder = require("bundle-master")


module.exports =  builder
.postCss("resources/css/app.css", "assets/css/app.css")
.react("resources/js/app.js", "assets/js/app.js")
.init();