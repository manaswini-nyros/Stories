import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import signup from './components/signup';


 export default class App extends Component {




  render() {
    return (
 
<nav class="navbar navbar-default navbar-fixed-top">
<div class="container-fluid">
<div class="navbar-header">
      <a class="navbar-brand" href="#">Medium</a>
     <Router><Link to='/signup'>signup</Link></Router>
       
</div>
   <div>
    <ul class="nav navbar-nav">
      <li class="nav-item active"><a href="#">HOME</a></li>
                    <li><a href="#">THE NEW NEW</a></li>
                    <li><a href="#">CULTURE</a></li>
                    <li><a href="#">TECH</a></li>
                    <li><a href="#">STARTUPS</a></li>
                    <li><a href="#">SELF</a></li>
                    <li><a href="#">POLITICS</a></li>
                    <li><a href="#">DESIGN</a></li>
                    <li><a href="#">HEALTH</a></li>
                 
   
    </ul>
    </div>
    </div>
 
   <Route path="/Login" component={Login}/>
   <Route path="/signup" component={signup}/>
   </nav>
  
  


            

       
    );
  }
}




