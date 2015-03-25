angular.module('surfing', ['chute', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.html',
        controller: 'ChuteController'
      });
  });
