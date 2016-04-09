var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  products: [{
    item: {type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true},
    quantity: {type: Number, min: 1}
  }]
})

module.exports = mongoose.model('cart', schema);
