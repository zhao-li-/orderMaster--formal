'use strict';

angular.module('orderMasterApp')
  .controller('ChooseRestaurantsCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.restaurants =[
    {
        "name": "KFC"
    },
    {
        "name": "7-11"
    },
    {
        "name": "成都小吃"
    }
];
    $scope.back_to_order_details = function(){
        $location.path('/order_details')
    }
  });
