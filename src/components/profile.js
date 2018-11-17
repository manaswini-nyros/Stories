import React,{Component} from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Post from './post';
class Profile extends Component {
  render() {
    return (

          <div class="container">
            <div class="page-header text-center">
              <h1><span class="fa fa-anchor"></span> Profile Page</h1>
                <Router><Link to='/post'  class="btn btn-default btn-sm">POST</Link></Router>
                 <a href="/logout" class="btn btn-default btn-sm">Logout</a>
            </div>
          </div>
  
   
    );
  }
}
export default Profile;
