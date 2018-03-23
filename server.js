// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Routes
var apiRoute = require("./app/routing/apiRoutes.js");
var htmlRoute = require("./app/routing/htmlRoutes.js");
var friends = require("./app/data/friends.js");

var PORT = process.env.PORT || 3000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", express.static('public'));

apiRoute(app);
htmlRoute(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
