// models/test.js

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var TestSchema = new Schema({
    course: String,
    isCompleted: Boolean
});

module.exports = mongoose.model('Test', TestSchema);