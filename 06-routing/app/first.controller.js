angular.module('awesomeApp')
.controller('firstController', function($rootScope, $scope, $log, nameService, $stateParams, $state) {
  $scope.names = nameService.getNames();

  $scope.getName = function() {
    nameService.getNewName();
  };
 });














// StateParams

 // $log.debug('my parameters are:', $stateParams);
 //
 // $scope.myPassedParameters = $stateParams;
 //



// State GoTo

 // $scope.goToList = function() {
 //   $state.go('state1.list');
 // };



// State Current

 // $scope.isParentState = function() {
 //   return $state.current.name == "state1";
 // }
