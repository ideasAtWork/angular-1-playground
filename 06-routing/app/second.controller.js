angular.module('awesomeApp')
.controller('secondController', function($rootScope, $scope, $log, nameService, $stateParams) {
  $scope.names = nameService.getNames();

  $scope.getName = function() {
    nameService.getNewName();
  };

  $log.debug('my parameters are:', $stateParams);
});



  //
  // $scope.myPassedParameters = $stateParams;
  //
  //
  // $scope.goToList = function() {
  //   $state.go('state1.list');
  // };
  //
  // $scope.isParentState = function() {
  //   return $state.current.name == "state1";
  // }
