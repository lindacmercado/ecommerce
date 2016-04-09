var Product = require('../models/product');

module.exports = {

  addProduct: function(req, res) {
    var product = new Product(req.body)
    product.save().then(function(result) {
      console.log(result);
      res.status(500).end();
    })
  },

  getProducts: function(req, res) {
    Product.find(function(err, result) {
      if (err) return res.status(500).send(err);
      return res.json(result);
    })
  },

  updateProduct: function(req, res) {
    Product.update({_id: req.params.id}, req.body, function(err, result) {
      console.log(result);
      res.status(500).end(result);
    })
  },

  deleteProduct: function(req, res) {
    Product.remove({_id: req.params.id}, function(result) {
      console.log('Deleted results:', result);
      res.status(500).end();
    })
  }
};
