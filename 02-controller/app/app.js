var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl', function($scope, $rootScope, $window, $log) {

  $rootScope.myField = 12.42;

  console.debug("this is rootScope", $rootScope);

  $scope.multiplyby2 = function() {
    return $rootScope.myField * 2;
  };
});
