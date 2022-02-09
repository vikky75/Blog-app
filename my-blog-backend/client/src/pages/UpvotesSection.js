import React from 'react';

function UpvotesSection(props) {

    const {name,setArticlesInfo,upvotes}=props;
    async function fetchUpvotes(){
        const response=await fetch(`/api/articles/${name}/upvote`,{method:'post'});
    
    const body=await response.json();
    setArticlesInfo(body);
    }
    return (
        <div>
            <button onClick={fetchUpvotes}>Upvotes</button>
           <p className='upvotes-p'>This post has been upvoted {upvotes} times</p>

        </div>
    );
}

export default UpvotesSection;