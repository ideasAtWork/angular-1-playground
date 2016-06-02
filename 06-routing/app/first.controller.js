angular.module('awesomeApp')
.controller('firstController', function($rootScope, $scope, $log, nameService, $stateParams, $state) {
  $log.debug('my parameters are:', $stateParams);

  $scope.myPassedParameters = $stateParams;

  $scope.names = nameService.getNames();

  $scope.getName = function() {
    nameService.getNewName();
  };

  $scope.goToList = function() {
    $state.go('state1.list');
  };

  $scope.isParentState = function() {
    return $state.current.name == "state1";
  }
 });
