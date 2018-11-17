var mongoose = require('mongoose');
var user = new mongoose.Schema({

    
        email        : {type:String},
        password     : {type:String}
   
  

});



module.exports = mongoose.model('user', user);