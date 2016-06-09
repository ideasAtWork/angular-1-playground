'use strict';

describe('awesomeController', function() {

    var $controller,
      $rootScope,
      $scope,
      nameService;

    beforeEach(module('awesomeApp'));

    beforeEach(inject(function(_$controller_, _$rootScope_, _nameService_) {

      $controller = _$controller_;
      $rootScope = _$rootScope_;
      nameService = _nameService_;

      $scope = $rootScope.$new();

      // nameService = jasmine.createSpyObj(['getNewName']);
      nameService.getNewName = jasmine.createSpy();

      $controller('awesomeController', {
        $scope: $scope,
        nameService: nameService
      });
    }));

    it('should initialise the names array', function() {
      expect($scope.names).not.toBeDefined();
    });

    describe('getName', function() {
      it('method should be defined', function() {
        expect($scope.getName).toBeDefined();
      });

      it('to call nameService.getNewName', function() {
        $scope.getName();

        expect(nameService.getNewName).toHaveBeenCalled();
      });
    });
});


























// 'use strict';
//
// describe('our campaign', function() {
//
//   var x = 1,
//     $rootScope,
//     $controller,
//     $scope,
//     nameService;
//
//   beforeEach(module('awesomeApp'));
//
//   beforeEach(inject(function(_$controller_, $rootScope) {
//     $controller = _$controller_;
//
//     $scope = $rootScope.$new();
//     // nameService = {
//     //   getNames: jasmine.createSpy()
//     // };
//
//     nameService = jasmine.createSpyObj(['getNames']);
//   }));
//
//   describe('awesomeController', function() {
//     beforeEach(function() {
//       $controller('awesomeController', {
//         $scope: $scope,
//         nameService: nameService
//       });
//     });
//
//     it('should invoke namesService.getName() when executing controller', function() {
//       expect(nameService.getNames).toHaveBeenCalled();
//     });
//   });
//
//
//   beforeEach(function() {
//     x = 2;
//   });
//
//   describe('teste simple', function() {
//
//     afterEach(function() {
//       // console.log('hello from afterEach');
//     });
//
//     it('should work', function() {
//       // console.log('this is the first test');
//       expect(x).toBe(2);
//     });
//
//     it('1 to be 1', function() {
//       expect(1).toEqual(1);
//     });
//   });
// });
