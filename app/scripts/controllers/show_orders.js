'use strict';

angular.module('orderMasterApp')
  .controller('ShowOrdersCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.back_to_order_details = function(){
        $location.path('/')
    };
    $scope.orders=Order.get_orders();
    $scope.order_quantity = Order.get_orders().length;
    $scope.no_order_quantity = Person.get_all_people().length - $scope.order_quantity;
  	$scope.no_order_people = Order.get_no_order_people();
    $scope.total_money = Order.get_total_money();
  });
