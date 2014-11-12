'use strict';

/**
 * @ngdoc overview
 * @name myAppsApp
 * @description
 * # myAppsApp
 *
 * Main module of the application.
 */
angular
  .module('myAppsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/nyancatgame', {
        templateUrl: 'views/nyancatgame.html',
        controller: 'NyancatgameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
