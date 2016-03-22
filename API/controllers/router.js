var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.post('/api/test', require('./routes/test'));
router.post('/api/basic_auth', require('./routes/basic_auth'));
//router.post('/api/check_admin', require('./routes/check_admin'));

module.exports = router;