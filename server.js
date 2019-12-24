var express = require("express");
var router = require('./app/routing/htmlRoutes.js');

var app = express();

var PORT = process.env.PORT || 8080;

router(app);

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./'));
app.listen(PORT);

console.log("Now listening on " + PORT)

