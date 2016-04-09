angular.module('ecommerce')

.controller('adminCtrl', ['$scope','productService', function($scope, productService) {

  var getProducts = function() {
    productService.getProducts().then(function(res) {
      $scope.products = res.data;
    })
  }
  getProducts();

  $scope.postProduct = function(product) {
    productService.postProduct(product).then(function(res) {
      console.log(res)
      $scope.newProduct = {}
      getProducts();
    })
  }

  $scope.updateProduct = function(id, product) {
    updateObj = {}
    if(product.title) {
      updateObj.title = product.title;
    }
    if(product.price) {
      updateObj.price = product.price;
    }
    productService.updateProduct(id, updateObj).then(function(res) {
      console.log(res);
      $scope.editProduct = {};
      getProducts();
    })
  }

  $scope.deleteProduct = function(id) {
    productService.deleteProduct(id).then(function(res) {
      console.log(res)
      getProducts()
    })
  }
}]);
