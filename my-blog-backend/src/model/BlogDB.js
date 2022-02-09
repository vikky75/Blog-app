const mongoose=require('mongoose');

const Schema=mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/blog-app');

var articleSchema=new Schema({
    name:String,
    username:String,
    upvotes:Number,
    comments:Array
});

var ArticleInfo=mongoose.model('articles',articleSchema);
module.exports=ArticleInfo;