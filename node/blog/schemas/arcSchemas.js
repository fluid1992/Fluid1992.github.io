var mongoose = require('mongoose');
var schema = mongoose.Schema;
var artschema = new schema({
    title:String,
    author:String,
    time:String,
    content:String
});
module.exports = artschema;