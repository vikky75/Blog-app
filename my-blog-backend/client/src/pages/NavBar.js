import React from 'react';
import { Link } from 'react-router-dom';
import About from './About'
import ArticlesListpage from './ArticlesListPage'

const NavBar= ()=>{
    return(
        <nav>
            
            
        <ul>
           
         <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/articles-list">Articles</Link>
          </li>
          <li>
              <Link to="/about">About</Link>
          </li>
          <li>
              <Link to="/" >Sign Out</Link>
          </li>
      </ul>
      
    </nav>
    
    )
    
     
}
export default NavBar;