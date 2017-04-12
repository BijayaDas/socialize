var mongoose = require('mongoose');  
var adminSchema = new mongoose.Schema({  
  name: String,
  badge: Number,
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});

mongoose.model('expose', adminSchema);