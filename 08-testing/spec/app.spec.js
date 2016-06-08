'use strict';

describe('ratings controller:', function() {
  it('should work', function() {
    expect(true).toBe(true);
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
