import React from 'react';
import { Link } from 'react-router-dom';


const HomeNavBar= ()=>{
    return(
        <nav>
        <ul>
            {/* <li>
             <img src='../component/Images/blog-gd4c9ad6eb_1920.png' alt='no'></img>
          </li> */}

         <li>
             <Link to='/' type='button'>Home</Link>
          </li>
          <li>
          <Link to='/signup'>Sign-Up</Link>
          </li>
          <li>
          <Link to='/login'>Sign-In</Link>
          </li>
          <li>
              <Link to='/articles-list'>Articles</Link>
          </li>
          
      </ul>
    </nav>
    )
    
     
}
export default HomeNavBar;