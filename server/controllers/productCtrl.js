angular.module('ecommerce')

.controller('productCtrl', function($scope, productService){

var Product = require('../models/product');

module.exports = {

  addProduct: function(req, res) {
    var product = new Product(req.body)
    product.save().then(function(result) {
      console.log(result);
      res.status(500).end();
    })
  },

  getProduct: function(req, res) {
    Product.find()
    .exec().then(function(result) {
      console.log(result);
      res.status(500).send(result);
    })
  },

  updateProduct: function(req, res) {
    Product.update({_id: req.params.id}, req.body, function(err, result) {
      console.log(result);
      res.status(500).end();
    })
  },

  deleteProduct: function(req, res) {
    Product.remove({_id: req.params.id}, function(result) {
      console.log('Deleted results:', result);
      res.status(500).end();
    })
  }

};
};
