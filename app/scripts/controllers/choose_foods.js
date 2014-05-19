'use strict';

angular.module('orderMasterApp')
    .controller('ChooseFoodsCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.foods = Food.get_all_foods()[Restaurant.get_chose_restaurant_name()];
        $scope.back_to_order_details = function () {
            $location.path('/order_details')
        }
        $scope.choose_food = function (food_name) {
            Food.save_food(food_name);
            $location.path('/order_details')
        }
    });
