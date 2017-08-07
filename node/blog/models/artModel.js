var mongoose = require('mongoose');
var artStcema = require('../schemas/arcSchemas');
var artModel = mongoose.model('artModel',artStcema);
module.exports=artModel;