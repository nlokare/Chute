angular.module('chute', ['wu.masonry'])
  .controller('ChuteController', function ($scope, Surfers) {
    angular.extend($scope, Surfers);
    
    $scope.assets;

    $scope.get = function () {
      $scope.fetch().then(function (res) {
        $scope.assets = res.data.map(function (asset) {
          return asset.url;
        });
      });
    };

  })
  .factory('Surfers', function ($http) {
    var surfers ={};

    surfers.fetch = function () {
      return $http({
        method: 'GET',
        url: '/chute',
        dataType: 'json'
      }).then(function (res) {
        return res;
      });
    };

    return surfers;
  });
