'use strict';

angular.module('orderMasterApp')
    .controller('OrderDetailsCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.choose_people = function(){
            $location.path('/choose_people')
        }
        $scope.choose_restaurants = function(){
            $location.path('/choose_restaurants')
        }
        $scope.choose_foods = function(){
            $location.path('/choose_foods')
        }
        $scope.back_to_main = function(){
            $location.path('/')
        }
        $scope.person_name =localStorage.getItem('person_name');
        $scope.restaurant_name =localStorage.getItem('restaurant_name');
        $scope.food_name = localStorage.getItem('food_name');
        $scope.choosed_restaurant = localStorage.getItem('restaurant_name') == null ;
    });
