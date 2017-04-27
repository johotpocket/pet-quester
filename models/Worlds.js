var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var WorldsSchema = new mongoose.Schema({
  title: String,
  scenes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Scene'}]
});

module.exports = mongoose.model('World', WorldsSchema);
