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
    $scope.show_no_order_people =function(){
    	var all_people = Person.get_all_people();
    	var order_people=$.map(Order.get_orders(),function(order){
    		return {name:order.person_name}
    	})
    	var no_order_people=$.map(all_people,function(person){
    		
    	})
    	$scope.no_order_people = all_people;
    }
    $scope.show_no_order_people();
  });
