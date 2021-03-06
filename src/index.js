import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import profile from './components/profile';
import Signup from './components/signup';
import './index.css';
import App from './App';
import Login from './components/Login';
import Profile from './components/profile';
import Post from './components/post';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <Router>
   <div><Route path="/Login" component={Login}/><Route exact path="/" component={App}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/Profile" component={Profile}/>
    <Route path='/Post' component={Post}/>
    </div>
   </Router>
   
 


	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
