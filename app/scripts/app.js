'use strict';

angular
  .module('orderMasterApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/order_details', {
            templateUrl: 'views/order_details.html',
            controller: 'OrderDetailsCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
