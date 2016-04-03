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

var router = require("./controllers/router.js");

// test function to connect to database
var boom = database('test1.js').test().then(function(value) {
    console.log(value);
}, function(value) {
    console.log(value);
});

// Allow Proxy

app.use('/', router);

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Resource", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

// Start Server
var server = app.listen(9029, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Web App listening at http://localhost:9029');
});