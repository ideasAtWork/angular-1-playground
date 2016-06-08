angular.module('awesomeApp')
.factory('nameService', function($http, $log, APP_CONSTANTS) {
  var baseUrl = APP_CONSTANTS.API_URL;
  var names = [];

  var getNewName = function() {
    $http({
      method: "GET",
      url: baseUrl
    }).then(function(response) {
      $log.debug('recevied new name', response);
      names.push(response.data);
    }, function(error) {
      $log.error('something went wrong', error);
    });
  };

  var getNames = function() {
    return names;
  };

  return {
    getNewName: getNewName,
    getNames: getNames
  }
});
