angular.module('awesomeApp')
.controller('secondController', function($rootScope, $scope, $log, nameService) {
  $scope.names = nameService.getNames();

  $scope.getName = function() {
    nameService.getNewName();
  };
});
