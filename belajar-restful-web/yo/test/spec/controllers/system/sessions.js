'use strict';

describe('Controller: SystemSessionsCtrl', function () {

  // load the controller's module
  beforeEach(module('yoApp'));

  var SystemSessionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SystemSessionsCtrl = $controller('SystemSessionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
