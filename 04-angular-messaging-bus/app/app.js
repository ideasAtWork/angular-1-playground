// Define the `awesomeApp` module
var awesomeApp = angular.module('awesomeApp', []);

awesomeApp
.controller('firstController', function ($rootScope, $scope, $log, $http) {
  $rootScope.$on("myEvent", function(event, message) {
    $log.debug('rootScope received myEvent with message:', message);
  });

  $scope.$on("myEvent", function(event, message) {
    $log.debug('firstController received myEvent with message:', message);
  });

  $scope.broadcastMessage = function() {
    $log.debug("broadcasting message");
    $rootScope.$broadcast("myEvent", "this is a BROADCAST test message");
  };

  $scope.emitMessage = function() {
    $log.debug("emitting message");
    $scope.$emit("myEvent", "this is a EMIT test message");
  };
})
.controller('secondController', function ($scope, $log) {
  $scope.$on("myEvent", function(event, message) {
    $log.debug('secondController received myEvent with message:', message);
  });
});
