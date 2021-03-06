var mongoose = require('mongoose');
var cart = require('./cart');

var schema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true, index: true},
  password: {type: String, required: true},
  cart: [cart],
  orders: []
})

module.exports = mongoose.model('User', schema);
