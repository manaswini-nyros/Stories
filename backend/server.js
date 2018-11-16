var express=require('express');
var http=require('http');
var path=require('path');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var router = express.Router();
var app=express();
var Users=require('./models/user');
var cors=require('cors');
app.use(cors())
mongoose.connect('mongodb://localhost:27017/stories');
mongoose.connection.once('open', function (){
       console.log('MongoDB connection open');
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.listen(3002, function () {
      console.log('app listening on port 3002');
})
