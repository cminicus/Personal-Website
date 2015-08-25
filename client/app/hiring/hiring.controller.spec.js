'use strict';

describe('Controller: HiringCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var HiringCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HiringCtrl = $controller('HiringCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
