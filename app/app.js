// Define the `awesomeApp` module
var awesomeApp = angular.module('awesomeApp', []);

// Define the `awesomeController` controller on the `awesemeApp` module
awesomeApp
.controller('awesomeController', function AwesomeAppController(
  $rootScope, $scope, $log, $http
) {
  $rootScope.$on("evenimentulMeu", function(message) {
    $log.debug("caught evenimentulMeu in rootScope", message);
  });

  $scope.$on("evenimentulMeu", function(message) {
    $log.debug("caught evenimentulMeu in AwesomeAppController", message);
  });

  $scope.sendMessage = function(message) {
    $scope.$emit("evenimentulMeu", message);
  };
})

.controller('awesomeController2', function AwesomeAppController2(
  $scope, $log, $http
) {

  $scope.listOfOtherThings = [
    { name: "Foo" },
    { name: "Bar" }
  ];

  $scope.$on("evenimentulMeu", function(message) {
    $log.debug("caught evenimentulMeu in AwesomeAppController2", message);
  });
});
