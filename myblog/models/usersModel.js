var mongoose = require('mongoose');
var userSchema = require('../schemas/userName');
var userModel = mongoose.model('userModel',userSchema);
module.exports=userModel;