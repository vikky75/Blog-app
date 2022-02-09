import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../component/ArticlesList';
import NavBar from './NavBar';

const ArticlesListPage = () => {
    return (
        <>
        <NavBar/>
        <div className='articleslist-page'>
           <h1>Articles List</h1>
           <ArticlesList articles={articleContent}/> 
        </div>
        </>
    );
};

export default ArticlesListPage;