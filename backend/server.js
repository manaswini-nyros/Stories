var express=require('express');
var http=require('http');
var path=require('path');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var router = express.Router();
var app=express();
var Users=require('./models/user');
var stories=require('./models/story');
var cors=require('cors');
app.use(cors())
mongoose.connect('mongodb://localhost:27017/stories');
mongoose.connection.once('open', function (){
       console.log('MongoDB connection open');
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/Login',function(req,res){
    Users.findOne({email:req.body.email,
        password:req.body.password},function(err,data){
        if(err){
            res.send('login failed')
        }else{
            console.log(data)
            res.json({
                status:'success',
                login: data
            })
        }
    })
})
app.post('/Poststories',function(req,res){
  stories.create({title:req.body.title,
                     category:req.body.category,
                     description:req.body.description,
                     story:req.body.story},function(err,data){
    if(err){
        res.send('story not posted');
    }else{
        
        res.json({
            status:'success'

        })
    }
  })
})
app.listen(3002, function () {
      console.log('app listening on port 3002');
})
