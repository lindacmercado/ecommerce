var mongoose = require('mongoose');
var product =  require('./product.js');  //requires another model

var schema = new mongoose.Schema({
  user: {type: Schema.types.ObjectId, ref: 'User', required: true},
  products: [{
    item: productSchema,
    quantity: {type: Number, required: true, min: 1}
  }],
  ordered: {type: Date, default: newDate()}
})

module.exports = mongoose.model('order', schema);
