// Module Dependencies

var express = require("express");
var router = require("./controllers/router.js");
var path = require('path');

global.database = function(filepath) {
    return require( path.join(path.resolve(__dirname), '../Database') + "/" + filepath );
}

// test function to connect to database
var boom = database('test1.js').test().then(function(value) {
    console.log(value);
}, function(value) {
    console.log(value);
});

// Setup Middleware

var app = express();

// Routes

app.use('/', router);

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "http://localhost:4200");
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