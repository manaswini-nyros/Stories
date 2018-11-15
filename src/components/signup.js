import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



export default class App extends Component {
 render() {
    return (
<div class="container">
<div class="col-sm-6 col-sm-offset-3">

    <h1><span class="fa fa-sign-in"></span> Signup</h1>

   
    <form action="/signup" method="post">
        <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" name="email"/>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password"/>
        </div>

        <button type="submit" class="btn btn-warning btn-lg">Signup</button>
    </form>

    <hr></hr>

    
    <p>or go <a href="/" >home</a>.</p>

   

</div>
</div>
   
    );
  }
}

