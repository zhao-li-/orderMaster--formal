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
    });
