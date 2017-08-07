var mongoose =require('mongoose');
var schma = mongoose.Schema;
var userSchema = new schma({
    userEmail:String,
    password:String
})
module.exports=userSchema;