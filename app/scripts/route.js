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
            .when('/choose_people', {
                templateUrl: 'views/choose_people.html',
                controller: 'ChoosePeopleCtrl'
            })
            .when('/choose_restaurants', {
                templateUrl: 'views/choose_restaurants.html',
                controller: 'ChooseRestaurantsCtrl'
            })
            .when('/choose_foods', {
                templateUrl: 'views/choose_foods.html',
                controller: 'ChooseFoodsCtrl'
            })
            .when('/show_orders', {
                templateUrl: 'views/show_orders.html',
                controller: 'ShowOrdersCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
