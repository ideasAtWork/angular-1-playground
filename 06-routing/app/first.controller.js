angular.module('awesomeApp')
.controller('firstController', function($rootScope, $scope, $log, nameService, $stateParams, $state) {

  $log.log('current state', $state);

  $scope.$state = $state;

  $scope.names = nameService.getNames();

  $scope.getName = function() {
    nameService.getNewName();
  };

  $scope.goToList = function() {
    $state.go('state1.list');
  }
 });
