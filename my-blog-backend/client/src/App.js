import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import React, { Component } from 'react';
import Homepage from './pages/Homepage';
import About from './pages/About';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import './App.css'
import NotFoundPage from './pages/NotFoundPage';
import SignUp from './component/signup/SignUp';
import Login from './component/signup/Login';


class App extends Component{
  render(){
    return (
      <Router>
      <div className='App'>
        {/* <NavBar/> */}
        <div id='page-body'>
          
          <Routes>
        <Route path="/" element={<Homepage/>} exact /> 
        <Route path="/signup" element={<SignUp/>} exact /> 
        <Route path="/login" element={<Login/>} exact /> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/articles-list" element={<ArticlesListPage/>}/> 
        <Route path="/article/:name" element={<ArticlePage/>}/> 
        <Route  path="*" element={<NotFoundPage/>}/>
      
        </Routes>
        
        
        </div>
       
        
      </div>
       </Router>
    );
  }
  
}

export default App;
