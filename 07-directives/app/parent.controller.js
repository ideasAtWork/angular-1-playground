angular.module('awesomeApp')
.controller('parentController', function($rootScope, $scope, $log, nameService) {
  $scope.parentInformation = "Some information";

  $scope.changeInfo = function() {
    $scope.parentInformation = "new value";
  }

  $scope.sendMessageInParent = function(data) {
    $log.log('parent controller, sendMessageInParent was called with:', data);
  }

  console.log('parent scope is', $scope);
});
