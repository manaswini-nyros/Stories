// load the things we need
var mongoose = require('mongoose');






var userSchema = mongoose.Schema({

    
        email        : {type:String},
        password     : {type:String}
   
  

});



module.exports = mongoose.model('User', userSchema);