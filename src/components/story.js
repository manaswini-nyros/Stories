import React, { Component } from 'react';
import axios from 'axios';

import Home from './home'

import { Row, Col,Container } from 'reactstrap';



class Story extends Component{


	constructor(props){
		super(props);

		this.state= {

			url_id:this.props.match.params.id,
			storyData:{}
		}
		
		
	}


	componentDidMount(){

		this.getData();

	}

	getData(){



		axios.post('http://10.90.90.110:3002/singleStory', {get_id:this.state.url_id}).then(res=>{


			if( res.data.status === "success"){

				console.log(res.data);

				this.setState({storyData:res.data.singleStory});

				console.log(this.state.storyData);


			}



		})




	}
	



render(){

	var Clapcenter ={

		display: "flex",
  		alignItems: "center",
  		borderRadius:"50%",
  		outline:"none"
	}

	return(


			
		<Container>

			<Row>

				<Col sm = '3'>

					<div style = {Clapcenter}>
						<button style = {Clapcenter}><img src ="a1893975c93082afb8b0473a92c5deb8.png" height="50" width="50" /></button>
					</div>

				</Col>

				<Col sm = '9'>

					<Row>
						<Col sm='12'>
			            	<h1 align="center">{this.state.storyData.title}</h1>
			          </Col>
			        </Row>

			        <Row>
						<Col sm='12'>
			            	<h4>{this.state.storyData.story}</h4>
			          </Col>
			        </Row>
				</Col>

			</Row>

			

	        
	    </Container>

			





		);

	}
}
export default Story;





