import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Profile from './profile';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={email:'',password:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        }

    handleChange(event){
        
        if (event.target.name === 'email'){
            
            this.setState({ 'email': event.target.value });
        }
        if (event.target.name === 'password') {
            this.setState({'password':event.target.value});
        }
    }
     handleSubmit(event){
       event.preventDefault();
       var admindetails={
        email:this.state.email,
        password:this.state.password
       }
       axios.post('http://10.90.90.110:3002/Login',admindetails).then(res=>{
                  
                  if(res.data.status==='success'){
                    console.log(res.data)
                    this.props.history.push('/Profile')
                  }
       })
    }
   

  
  render() {
    return (
         <div class="container">
         <div class="col-sm-6 col-sm-offset-3">

             <h1><span class="fa fa-sign-in"></span>Admin Login</h1>
            <form  method="post" onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label>Email</label>
                <input type="text"  class="form-control" name="email" onChange={this.handleChange} />
              </div>
              <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control" name="password" onChange={this.handleChange} />
             </div>
   
                <input type="submit" class="btn btn-warning btn-lg" value="Login"/>
            </form>
                <hr/>
               <p>Or go <a href="/">home</a></p>

                 </div>
                  </div>
  );
 }
}
