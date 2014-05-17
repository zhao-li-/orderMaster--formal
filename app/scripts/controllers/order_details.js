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
    });
