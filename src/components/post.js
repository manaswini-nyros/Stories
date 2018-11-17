import React,{Component} from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
export default class Post extends Component {
	 constructor(props){
        super(props);
         this.state={title:'',category:'',description:'',story:''};
         this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        
        if (event.target.name === 'title'){
            
            this.setState({ 'title': event.target.value });
        }
        if (event.target.name === 'category') {
            this.setState({'category':event.target.value});
        }
        if (event.target.name === 'description'){
            
            this.setState({ 'description': event.target.value });
        }
        if (event.target.name === 'story') {
            this.setState({'story':event.target.value});
        }
    }
       handleSubmit(event){
       event.preventDefault();
       var newstory={
        title:this.state.title,
        category:this.state.category,
        description:this.state.description,
        story:this.state.story
       }
       axios.post('http://10.90.90.110:3002/Poststories',newstory).then(res=>{
                  
                  if(res.data.status==='success'){
                   alert('success');
                    
                  }
       })
    }
   
	render() {
		return (

			<div class="container">
			   <div class="page-header text-center">
			    <h1><span class="fa fa-anchor"></span>POST STORY</h1>
			     <form method="post" onSubmit={this.handleSubmit}>
			       <div class="form-group">

			         <div class='container'>
			          <div class="col-xs-4">
			          <label for="usr">Title:</label>
			          <input class="form-control" name="title" type="text" onChange={this.handleChange}/>
			          </div>
			         </div>
			         
			         <div class='container'>
			          <div class="col-xs-4">
			          <label for="usr">Category:</label>
			          <input class="form-control" name="category" type="text" onChange={this.handleChange}/>
			          </div>
			         </div>
			       
			        <div class='container'>
			         <div class="col-xs-4">
			         <label for="usr">Description:</label>
			         <input class="form-control" name="description" type="text" onChange={this.handleChange}/>
			       </div>
			       </div>
			
			<div class='container'>
			<div class="col-xs-4">
			<label for="comment">Story:</label>
			<textarea class="form-control" rows="5" name="story" onChange={this.handleChange}></textarea>
			</div>
			</div>
			
			</div>
			<input type="submit" class="btn btn-warning btn-lg" value="post"/>
			  <a href="/logout" class="btn btn-default btn-sm">Logout</a>
			</form>

			
			</div>
			</div>


			);
	}
}

