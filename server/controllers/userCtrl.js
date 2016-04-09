var User = require('../models/user');
var cartCtrl = require('./cartCtrl');

module.exports = {

  getUser: function(req, res) {
    User.findOne({username: req.params.username}, function(err, result) {
      if(err) {
        res.status(500).send(err)
      } else {
        console.log(user);
        res.status(200).send(user)
      }
    })
  },

  addUser: function(req, res) {
    cartCtrl.addCart().then(function(cart) {
      req.body.cart = cart._id
      req.body.orders = []
      var user = new User(req.body)
      user.save().then(function(result) {
        console.log('New User result:', result);
        res.status(201)
      })
    })
  },

  updateUser: function(req, res) {
    User.update({_id: req.params.id}, req.body, function(err, result) {
      console.log('Update user:', result);
      res.status(200).end();
    })
  }

};
