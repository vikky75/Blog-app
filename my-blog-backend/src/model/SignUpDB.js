const mongoose=require('mongoose');

const Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/blog-app');

var signupSchema=new Schema({
    email:String,
    password:String,
});

var SignUpInfo=mongoose.model('signups',signupSchema);
module.exports=SignUpInfo;