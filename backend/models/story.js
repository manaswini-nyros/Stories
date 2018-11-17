var mongoose = require('mongoose');
var stories = new mongoose.Schema({

    
        title        :{type:String},
        category     :{type:String},
        description  :{type:String},
        story        :{type:String}
  

});



module.exports = mongoose.model('stories', stories);