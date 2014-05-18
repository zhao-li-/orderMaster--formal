'use strict';

angular.module('orderMasterApp')
  .controller('ChooseRestaurantsCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.restaurants =Restaurant.get_all_restaurants();
    $scope.back_to_order_details = function(){
        $location.path('/order_details')
    }
    $scope.choose_restaurant = function(restaurant_name){
      var restaurant = new Restaurant(restaurant_name);
      restaurant.save();
      $location.path('/order_details')
    }
  });
