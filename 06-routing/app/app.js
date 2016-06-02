angular.module('awesomeApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /page1
  $urlRouterProvider.otherwise("/page1");
  //
  // Now set up the states
  $stateProvider
  .state('state1', {
    url: "/page1/:firstParam",
    templateUrl: "app/partials/page1.html"
  })
  .state('state1.list', {
    url: "/lista-mea",
    templateUrl: "app/partials/page1.list.html"
  })
  // .state('page2', {
  //   url: "/page2",
  //   templateUrl: "app/partials/page2.html"
  // })
  // .state('page2.list', {
  //   url: "/list",
  //   templateUrl: "app/partials/page2.list.html",
  //   controller: function($scope) {
  //     $scope.things = ["A", "Set", "Of", "Things"];
  //   }
  // })
});
