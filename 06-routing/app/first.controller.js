angular.module('awesomeApp')
.controller('firstController', function($rootScope, $scope, $log, nameService) {
  $scope.names = nameService.getNames();

  $scope.getName = function() {
    nameService.getNewName();
  };
});
