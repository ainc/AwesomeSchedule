// Module Dependencies

var express = require("express");
var router = require("./controllers/router.js");

// Setup Middleware

var app = express();

// Routes

app.use('/', router);

// Start Server
var server. app.listen(9029, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Web App listening at http://localhost:9029');
});