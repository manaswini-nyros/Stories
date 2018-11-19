import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './index.css';
import Home from './components/home';
import Story from './components/story';
import { Row, Col,Container} from 'reactstrap';


 
class App extends Component {
  render() {

      var rowStyle={
        padding:"10px"
      }


    return (
      <HashRouter>
        <div style={rowStyle}>
              <Container>
              <Row>
                <Col sm="2"><h2><b>Medium</b></h2></Col>
                <Col sm="6"></Col>
                <Col sm="4">
                  <Row>
                    
                    <Col sm='3'><a href="/signup" className="btn btn-outline-success">signup</a></Col>
                 
                  </Row>

                </Col>
              </Row> 
            </Container>

            <Container className="navbar">
              <Row>
                  <ul className="nav navbar-nav">
      <li class="active"><a href="#">HOME</a></li>
                    <li><a href="#">THE NEW NEW</a></li>
                    <li><a href="#">CULTURE</a></li>
                    <li><a href="#">TECH</a></li>
                    <li><a href="#">STARTUPS</a></li>
                    <li><a href="#">SELF</a></li>
                    <li><a href="#">POLITICS</a></li>
                    <li><a href="#">DESIGN</a></li>
                    <li><a href="#">HEALTH</a></li>
                    <li><a href="#">POPULAR</a></li>
                    <li><a href="#">COLLECTIONS</a></li>
                    <li><a href="#">MORE</a></li>
                   
    </ul>
              </Row>
            </Container>
              <div>

                <Route exact path="/" component={Home}/>
                 <Route path="/Story/:id" component={Story}/>
              </div>  
       
        </div>

      </HashRouter>
    );
  }
} 
export default App;