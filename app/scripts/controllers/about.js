'use strict';

/**
 * @ngdoc function
 * @name myAppsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAppsApp
 */
angular.module('myAppsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
