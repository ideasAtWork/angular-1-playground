angular.module('awesomeApp')
.directive('myElement', function() {
  return {
    restrict: "A",
    templateUrl: "app/partials/myElement.html",
    scope: {
      // ourDirectiveInfo: "=info",
      // ourDirectiveInfo: "@info",
      // ourDirectiveInfo: "<info"
      // sendMessageInDirective: "&sendMessage"
    },
    link: function(scope, elem, attr) {
      scope.changeInfoInDirective = function() {
        scope.ourDirectiveInfo = "new value";
      };

      console.log('directive scope is', scope);
    }
  }
});
