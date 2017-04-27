var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var MonstersSchema = new mongoose.Schema({
  name: String,
  species: String,
  weakness: String
});

module.exports = mongoose.model('Monster', MonstersSchema);
