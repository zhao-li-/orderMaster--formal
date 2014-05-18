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
    console.log(Order.get_orders())
    $scope.order_quantity = Order.get_orders().length;
    $scope.no_order_quantity = Person.get_all_people().length - $scope.order_quantity;
    $scope.show_no_order_people =function(){
    	var all_people = $.map(Person.get_all_people(),function(person){
            return person.name;
        });
    	var order_people=$.map(Order.get_orders(),function(order){
    		return order.person_name;
    	})
    	var no_order_people=$.map(all_people,function(person){
    		if($.inArray(person,order_people)==-1){
    			return person;
    		}
    	})
    	$scope.no_order_people = no_order_people;
    }
    $scope.show_no_order_people();
    $scope.total_money = function(){
        var money=0
        for(var i=0;i<Order.get_orders().length;i++){
            money = money+Order.get_orders()[i].food_price;
        }
        return money;
    }
  });
