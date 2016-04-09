var Cart = require('../models/cart');
var Product = require('../models/product');
var updateUser = require('./userCtrl').updateUser;

module.exports = {

  addCart: function() {
    var cart = new Cart({products: [], total: 0})
    var deferred = $q.defer();

    cart.save().then(function(result) {
      console.log('Cart save results:', result)
      deferred.resolve(result);
    })
    return defered.promise
  }

};
