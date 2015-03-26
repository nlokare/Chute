angular.module('surfing', ['chute', 'wu.masonry', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.html',
        controller: 'ChuteController'
      });
  });
