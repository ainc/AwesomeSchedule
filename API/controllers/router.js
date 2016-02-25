var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.post('/api/test', require('./routes/test'));

module.exports = router;