angular.module('awesomeApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /page1
  $urlRouterProvider.otherwise("/page1");

  // Now set up the states
  $stateProvider
  .state('state1', {
    url: "/page1",
    views: {
      '@': {
        templateUrl: "app/partials/page1.html"
      },
      'footer': {
        templateUrl: "app/partials/page1.footer.html"
      }
    }
  })
  .state('state1.list', {
    url: "/list",
    views: {
      'list': {
        templateUrl: "app/partials/page1.list.html"
      },
    }
  })
  .state('state2', {
    url: "/page2-new-213912304829384723",
    templateUrl: "app/partials/page2.html"
  })
});









// PARAMS

// .state('state1', {
//   url: "/page1/:firstParam",
//   templateUrl: "app/partials/page1.html"
// })


// NESTED

// .state('state1.list', {
//   url: "/lista-mea",
//   templateUrl: "app/partials/page1.list.html"
// })
