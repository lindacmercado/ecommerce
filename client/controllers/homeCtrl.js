angular.module('ecommerce')

.controller('homeCtrl', ['$scope', '$productService', function($scope, productService, cartService) {

  var getProducts = function() {
    productService.getProducts().then(function(res) {
      $scope.products = res.data;
    })
  }()
  $scope.addToCart = function(itemId) {
    cartService.addToCart(itemId).then(function(res) {
      console.log(res);
      alert('Item Added!');
    })
  }

}]);
