'use strict';

/**
 * @ngdoc function
 * @name myAppsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppsApp
 */
angular.module('myAppsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
