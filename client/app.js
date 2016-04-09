angular.module('ecommerce', ['ui.router'])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/templates/home.html',
    controller: 'homeCtrl'
  })

  .state('admin', {
    url: '/admin',
    templateUrl: '/templates/admin.html',
    controller: 'adminCtrl'
  })
}]);
