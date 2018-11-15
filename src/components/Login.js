import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={email:'',password:'',find:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.find=this.find.bind(this);
       
        
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
       
        var emailpattern=/^manaswini@gmail.com$/;

        

        if (emailpattern.match(this.state.email)) {
            var userDetails={
                email:this.state.email,
                password:this.state.password
            }
         console.log(userDetails);
            axios.post('http://10.90.90.110:3000/passport',userDetails).then(res=>{
                console.log(res.userDetails);
                if (res.data.status === 'failed') {
                    alert('wrong admin username');
                }else{
                    alert('success');
                }
            })
        }else{
            alert('enter valid details');
        }
            
    }
        find(event){
        event.preventDefault();
        if (this.state.find==='') {
            alert('required');
        }else{
            axios.post('http://10.90.90.110:3000/passport',{email:this.state.find}).then(res=>{
                  if(res.data.status === 'success'){
                    
                this.setState({find:res.data.reguser});

            }
            console.log(this.state.find);
            })
        }
    }


  render() {
    return (
         <div class="container">
         <div class="col-sm-6 col-sm-offset-3">

             <h1><span class="fa fa-sign-in"></span>Admin Login</h1>
            <form action="/Login" method="post" onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label>Email</label>
                <input type="text"  class="form-control" name="email" onChange={this.handleChange} />
              </div>
              <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control" name="password" onChange={this.handleChange} />
             </div>
   
                <button type="submit" class="btn btn-warning btn-lg" onClick={this.find}>Login</button>
            </form>
                <hr/>
               <p>Or go <a href="/">home</a></p>

                 </div>
                  </div>
  );
 }
}