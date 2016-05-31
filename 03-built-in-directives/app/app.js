var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl', function($scope, $rootScope, $window, $log) {

  $scope.zile = [
  	"luni",
    "marti",
    "miercuri"
  ];

  $scope.handleClick = function() {
  	$log.log('this works!');
  }
});
