// Require Middleware for assistance in processing routes
var express = require("express");
var app = express();
var router = express.Router(); // Allows the use of a specific router file
var bodyParser = require("body-parser"); // Assists in reading data sent to API
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Sets up CORS for cross-domain communication with Ember Front-End
router.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "http://localhost:4200");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Resource", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.header("Access-Control-Allow-Credentials", "true");
    next();
});

// Supported routes
// Order of typical POST function (route name, allows data reading support, route file to be called)

router.post('/api/basic_auth', urlencodedParser, require('./routes/basic_auth'));

// Allows entire file to be seen with module.exports
module.exports = router;