'use strict';

describe('Controller: OrderdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('orderMasterApp'));

  var OrderdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderdetailsCtrl = $controller('OrderdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
