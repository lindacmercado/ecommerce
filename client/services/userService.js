angular.module('ecommerce')

.service('userService', function($http) {

  var loggedInUser;

  this.addUser = function(userObj) {
    return $http({
      method: 'POST',
      url: '/users',
      data: userObj
    })
  }

  this.loginUser = function(userInfo) {
    return $http({
      method: 'GET',
      url: '/users/' + userInfo.username,
    }).then(function(user) {
      loggedInUser = user;
    })
  }
  this.getUserId = function() {
    
  }

});
