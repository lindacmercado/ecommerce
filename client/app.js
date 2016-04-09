angular.module('ecommerce', ['ui.router'])

.config('$urlRouteProvider', '$stateProvider', function($urlRouteProvider, $stateProvider) {
  $urlRouteProvider.otherwise('/');

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
});
