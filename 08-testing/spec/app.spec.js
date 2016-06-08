'use strict';

describe('our campaign', function() {

  var x = 1,
    $rootScope,
    $controller,
    $scope,
    nameService;

  beforeEach(module('awesomeApp'));

  beforeEach(inject(function(_$controller_, $rootScope) {
    $controller = _$controller_;

    $scope = $rootScope.$new();
    // nameService = {
    //   getNames: jasmine.createSpy()
    // };

    nameService = jasmine.createSpyObj(['getNames']);
  }));

  describe('awesomeController', function() {
    beforeEach(function() {
      $controller('awesomeController', {
        $scope: $scope,
        nameService: nameService
      });
    });

    it('should invoke namesService.getName() when executing controller', function() {
      expect(nameService.getNames).toHaveBeenCalled();
    });
  });


  beforeEach(function() {
    x = 2;
  });

  describe('teste simple', function() {

    afterEach(function() {
      // console.log('hello from afterEach');
    });

    it('should work', function() {
      // console.log('this is the first test');
      expect(x).toBe(2);
    });

    it('1 to be 1', function() {
      expect(1).toEqual(1);
    });
  });
});
































// $scope = $rootScope.$new();


// beforeEach(inject(function (_$httpBackend_, _$rootScope_, _$controller_) {
//   $httpBackend = _$httpBackend_;
//   $controller = _$controller_;
//
//   spyOn($state, 'go').andReturn([]);
//
//   $scope = $rootScope.$new();
//
//   mockService = jasmine.createSpyObj('myMockService', ['doSomething', 'doSomethingElse']);
//   mockService.doSomething.andReturn({ something: true });
//
//   mockControlPanelSelectionService = jasmine.createSpyObj('controlPanelSelectionService', ['getSelectionContext']);
//   mockControlPanelSelectionService.getSelectionContext.andReturn($q.when({
//     getSomething : function () {
//       return false;
//     }
//   ));
//
//   mockFlexAPI = jasmine.createSpyObj("FlexAPI", ["getFlexApp", "flexAppName", "messaging", "navigation", "popup"]);
//
//   deferredTranslation = $q.defer();
//
//   spyOn(_$translate_, 'spy').andCallFake(function () {
//     return deferredTranslation.promise;
//   });
// }));
