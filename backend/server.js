var express=require('express');
var http=require('http');
var path=require('path');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var router = express.Router();
var app=express();
var Users=require('./model');
var cors=require('cors');
app.use(cors())
mongoose.connect('mongodb://localhost:27017/sportscompetition');
mongoose.connection.once('open', function (){
	   console.log('MongoDB connection open');
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.post("/find",(req,res)=>{
	Users.findOne({email:req.body.email},function(err,data){
		  if(err){  
                res.json({
                    status:'failed',

                });  
            }  
            else{             
                
                res.json({
                   status:'success',
                   message : 'fetched successfully',
                   reguser : data
           })

          }  
      });  

})
