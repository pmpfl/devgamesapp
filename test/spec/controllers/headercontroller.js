'use strict';

describe('Controller: HeadercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppsApp'));

  var HeadercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeadercontrollerCtrl = $controller('HeadercontrollerCtrl', {
      $scope: scope
    });
  }));
});
