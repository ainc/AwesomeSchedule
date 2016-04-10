var express = require("express");
var app = express();

var router = express.Router();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.post('/api/test', require('./routes/test'));
router.post('/api/basic_auth', urlencodedParser, require('./routes/basic_auth'));
router.post('/api/gimmieDatDate', require('./routes/gimmieDatDate'))

module.exports = router;