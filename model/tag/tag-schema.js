const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const tagSchema = new Schema({
  id: { type: Number, required: true },
  text: { type: String, required: true },
  numberMessages:  { type: Number }
});


module.exports = mongoose.model('Tag', tagSchema);
