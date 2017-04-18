var mongoose = require('mongoose');  
var adminSchema = new mongoose.Schema({  
  name: String,
  badge: Number,
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});

mongoose.model('ideaBox', adminSchema);

// We will encourage people to post their ideas and will deal with companies to adopt those ideas
// whosever idea gets selected they will get a prize money or royalty on profit.