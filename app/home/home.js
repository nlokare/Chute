angular.module('chute', ['wu.masonry', 'ngDialog'])
  .controller('ChuteController', function ($scope, Photographs, ngDialog) {
    angular.extend($scope, Photographs);

    $scope.assets;

    $scope.get = function () {
      $scope.fetch().then(function (res) {
        $scope.assets = res.data.map(function (asset) {
          return {url: asset.url, caption: asset.caption};
        });
      });
    };

    $scope.open = function (asset) {
      ngDialog.open({
        template: '<img src="' + asset.url + '/fit/500x300">',
        className: 'ngdialog-theme-default',
        plain: true,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true
      });
    };

  })
  .factory('Photographs', function ($http) {
    var photos ={};

    photos.fetch = function () {
      return $http({
        method: 'GET',
        url: '/chute',
        dataType: 'json'
      }).then(function (res) {
        return res;
      });
    };

    return photos;
  });
