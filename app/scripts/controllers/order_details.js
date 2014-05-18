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
        $scope.person_name =Person.get_chose_person_name();
        $scope.restaurant_name =Restaurant.get_chose_restaurant_name();
        $scope.food_name = Food.get_chose_food_name();
        $scope.choosed_restaurant = !Restaurant.get_chose_restaurant_name();
        $scope.choosed_all_infomation = !Person.get_chose_person_name() || !Restaurant.get_chose_restaurant_name() || !Food.get_chose_food_name();
        $scope.confirm_order = function(){
            
        }
    });
