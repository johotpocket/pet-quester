var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var ScenesSchema = new mongoose.Schema({
  startingScene: Boolean,
  encounter: String,
  choices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Choice'}]
});

module.exports = mongoose.model('Scene', ScenesSchema);
