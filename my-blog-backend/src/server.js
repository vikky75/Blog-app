import express from 'express';
import bodyParser from 'body-parser';
import ArticleInfo from './model/BlogDB';
import {SignUpInfo} from './model/SignUpDB';





const app=express();
app.use(bodyParser.json());

// basic fetch
app.get('/api/articles/:name',(req,res)=>{
    const articleName=req.params.name;
    ArticleInfo.findOne({name:articleName}).then(function(article){
        res.json(article);
    })

})
// signup
app.post('/api/signup',async(req,res)=>{
    var data=SignUpInfo(req.body);
    var signupData=await data.save();
    res.send(signupData);

   
})
// upvotes
app.post('/api/articles/:name/upvote',(req,res)=>{
    const articleName=req.params.name;
    const filter={name:articleName};
    const update={$inc:{upvotes:1}};
    ArticleInfo.findOneAndUpdate(filter,update,{new:true}).then(function(article){
        res.json(article);
    })
})

app.post('/api/articles/:name/add-comment',(req,res)=>{
    const articleName=req.params.name;
    const {username,text}=req.body;

    const filter={name:articleName};
    const update={$push:{comments:{username,text}}};
    ArticleInfo.findOneAndUpdate(filter,update,{new:true}).then(function(article){
        res.json(article);
    })
})

app.listen(8000,()=>console.log('server ready at 8000'));