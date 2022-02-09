import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';
import ArticlesList from '../component/ArticlesList';
import AddComments from './AddComments';
import Comments from './Comments';
import NotFoundPage from './NotFoundPage';
import UpvotesSection from './UpvotesSection';
import NavBar from './NavBar';

const ArticlePage = () => {
    const { name }=useParams();
    const article=articleContent.find(article=>article.name===name);
    // temporary storage of data
    const [articlesInfo,setArticleInfo]=useState({upvotes:0,comments:[]});

    // backend connection api
    useEffect(()=>{
        fetchData();
    });
            const fetchData=async()=>{
            const result=await fetch(`/api/articles/${name}`);
            const body=await result.json();
            setArticleInfo(body);
        }
    

    if(!article) return <NotFoundPage/>
    const otherArticles=articleContent.filter(article=>article.name!==name)
    return (
        <>
        <NavBar/>

        <div className='article-page'>
           <h1>{article.title}</h1> 
           <UpvotesSection name={name} setArticleInfo={setArticleInfo} upvotes={articlesInfo.upvotes}/>
           {article.content.map((paragraph,key)=>(<p key={key}>{paragraph}</p>))}
           <Comments comments={articlesInfo.comments}/>
           <AddComments name={name} setArticleInfo={setArticleInfo}/>
            <h3>Other Articles:</h3>
           <ArticlesList articles={otherArticles}/>
        </div>
        </>
    );
};

export default ArticlePage;