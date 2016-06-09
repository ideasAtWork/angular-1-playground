'use strict';

xdescribe('basic common-sense functionality', function() {
  var myNumber;

  beforeEach(function() {
    console.log('hello from beforeEach');
    myNumber = 2;
  });

  afterEach(function() {
    console.log('hello from afterEach');
  });

  it('verifies that 2+2 equals 4', function() {
    console.log('hello from test 1', myNumber);
    expect(2+2).toEqual(4);
  });

  it('verifies that true is truthy', function() {
    console.log('hello from test 2');
    expect(true).toBeTruthy();
  });
});






























// beforeEach(module('userAdmin.service', ['$provide', function ($provide) {
//   mockUserHTTPService = jasmine.createSpyObj('userHTTPService', ['loadUsers', 'loadUser', 'saveUser', 'deleteUser']);
//   $provide.value('userHTTPService', mockUserHTTPService);
//
//   mockCookies = createMockCookieService();
//   $provide.value('cookieService', mockCookies);
// }]));
