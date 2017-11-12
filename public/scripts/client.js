var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/', {
      templateUrl: '../dogs.html',
      controller: 'HomeController as hc',
    })
    .when('/redirect', {
      templateUrl: '../redirect.html',
      controller: 'RedirectController as rc'
    }).otherwise({
      redirectTo: '/'
    });
});