'use strict';

describe('Controller: ShowordersCtrl', function () {

  // load the controller's module
  beforeEach(module('orderMasterApp'));

  var ShowordersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowordersCtrl = $controller('ShowordersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
