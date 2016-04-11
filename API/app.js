// Module Dependencies and Setup Middleware

var express = require("express");
var path = require('path');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// Allows the router to use whatever is in the Database folder with the function database(filepath)
global.database = function(filepath) {
    return require( path.join(path.resolve(__dirname), '../Database') + "/" + filepath );
}

// Allows routes to be processed
var router = require("./controllers/router.js");

// Allow Proxy

app.use('/', router);

// Start Server
var server = app.listen(9029, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Web App listening at http://localhost:9029');
});
server.timeout = 3600000;