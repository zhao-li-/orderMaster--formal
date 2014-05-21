'use strict';

angular.module('orderMasterApp')
    .controller('OrderDetailsCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.choose_people = function () {
            $location.path('/choose_person')
        }
        $scope.choose_restaurants = function () {
            Order.clear_food_data();
            $scope.food_name = Food.get_chose_food_name();
            $location.path('/choose_restaurant')
        }
        $scope.choose_foods = function () {
            $location.path('/choose_food')
        }
        $scope.back_to_main = function () {
            $location.path('/')
        }
        $scope.init_data = function () {
            $scope.person_name = Person.get_chose_person_name();
            $scope.food_name = Food.get_chose_food_name();
            $scope.choosed_all_infomation = !Person.get_chose_person_name() || !Restaurant.get_chose_restaurant_name() || !Food.get_chose_food_name();
        }
        $scope.init_data();
        $scope.restaurant_name = Restaurant.get_chose_restaurant_name();
        $scope.choosed_restaurant = !Restaurant.get_chose_restaurant_name();
        $scope.confirm_order = function () {
            var order = new Order();
            order.process_order();
            $scope.init_data();
        }
    });
