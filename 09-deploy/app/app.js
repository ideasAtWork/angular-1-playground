// Define the `awesomeApp` module
var awesomeApp = angular.module('awesomeApp', []);

// Define the `awesomeController` controller on the `awesemeApp` module
awesomeApp
.constant('APP_CONSTANTS', {
  API_URL: 'https://api-yjluhgveqh.now.sh'
})
.controller('awesomeController', function AwesomeAppController(
  $rootScope, $scope, $log, $http, nameService
) {
  $scope.names = nameService.getNames();

  $scope.getName = function() {
    nameService.getNewName();
  };
});
