var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var ChoicesSchema = new mongoose.Schema({
  text: String,
  nextScene: { type: mongoose.Schema.Types.ObjectId, ref: 'sceneById'}
});

module.exports = mongoose.model('Choice', ChoicesSchema);
