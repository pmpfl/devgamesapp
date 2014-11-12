'use strict';

/**
 * @ngdoc function
 * @name myAppsApp.controller:HeadercontrollerCtrl
 * @description
 * # HeadercontrollerCtrl
 * Controller of the myAppsApp
 */
angular.module('myAppsApp')
  .controller('HeadercontrollerCtrl', function ($scope, $location) {
	$scope.isActive = function (viewLocation) {
     	var active = (viewLocation === $location.path());
    return active;
	};
});
