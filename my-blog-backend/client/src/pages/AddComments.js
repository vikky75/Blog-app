import React, { useState } from 'react';

function AddComments(props) {

    const [commentValues,setCommentValues]=useState({username:"",comment:""});
    const { name,setArticlesInfo }=props;
    function handleChange(event){
        console.log(event.target);
        const {name,value}=event.target;
        setCommentValues({...commentValues,[name]:value});
    }
      async  function fetchComments(){
            const username=commentValues.username;
            const text=commentValues.comment;
            const response = await fetch(`/api/articles/${name}/add-comment`,{method:'post',
            body: JSON.stringify({username,text}),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
          const body=await response.json();
          setArticlesInfo(body);
          setArticlesInfo({username:""},{comment:""})
          
    }
    return (
        <div>
            <div className='add-comment'>
                <h3>Add Comment</h3>
                <label>Name
                    <br></br>
                <input className='user-comment' type="text" name='username' value={commentValues.username} onChange={handleChange}/>
                </label><br></br>
                <label>
                    Comment:
                    <br></br>
                    <textarea rows="4" cols="50" name='comment' value={commentValues.comment} onChange={handleChange}></textarea>
                </label>
                <br></br>
                <button onClick={fetchComments}>Add Comment</button>
            </div>
            
        </div>
    );
    };

export default AddComments;