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
            .when('/choose_person', {
                templateUrl: 'views/choose_person.html',
                controller: 'ChoosePeopleCtrl'
            })
            .when('/choose_restaurant', {
                templateUrl: 'views/choose_restaurant.html',
                controller: 'ChooseRestaurantsCtrl'
            })
            .when('/choose_food', {
                templateUrl: 'views/choose_food.html',
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
