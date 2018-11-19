import React,{Component} from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import  './post';
class Profile extends Component {
  render() {
    return (

          <div class="container">
            <div class="page-header text-center">
              <h1><span class="fa fa-anchor"></span> Profile Page</h1>
                <Router><Link to='/post'  class="btn btn-default btn-sm">POST</Link></Router>
               
            </div>
          </div>
  
   
    );
  }
}
export default Profile;
