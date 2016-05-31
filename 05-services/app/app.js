// Define the `awesomeApp` module
var awesomeApp = angular.module('awesomeApp', []);

// Define the `awesomeController` controller on the `awesemeApp` module
awesomeApp
.controller('awesomeController', function AwesomeAppController(
  $rootScope, $scope, $log, $http, nameService
) {
  $scope.names = nameService.getNames();

  $scope.getName = function() {
    nameService.getNewName();
  };
});
