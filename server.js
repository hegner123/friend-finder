var express = require("express");
var router = require('./app/routing/htmlRoutes.js');

var app = express();

var PORT = process.env.PORT || 8000;

router(app);

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./'));
app.listen(PORT);

