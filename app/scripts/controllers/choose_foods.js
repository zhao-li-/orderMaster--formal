'use strict';

angular.module('orderMasterApp')
  .controller('ChooseFoodsCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var all_foods = {
  "KFC":[
      {
          "name":"田园脆鸡堡",
          "price":10.00
      },
      {
          "name":"黄金咖喱猪扒饭",
          "price":23.50
      },
      {
          "name":"意式肉酱肉丸饭",
          "price":16.00
      },
      {
          "name":"老北京鸡肉卷",
          "price":14.00
      },
      {
          "name":"劲脆鸡腿堡",
          "price":15.00
      }
  ],
  "7-11":[
      {
          "name":"全素",
          "price":9.00
      },
      {
          "name":"半素半荤",
          "price":11.50
      },
      {
          "name":"全荤",
          "price":13.00
      }
  ],
  "成都小吃":[
      {
          "name":"西红柿鸡蛋盖饭",
          "price":10.00
      },
      {
          "name":"木须肉盖饭",
          "price":10.00
      },
      {
          "name":"尖椒肉丝盖饭",
          "price":12.00
      },
      {
          "name":"京酱肉丝盖饭",
          "price":12.00
      },
      {
          "name":"地三鲜盖饭",
          "price":9.00
      }
  ]

};
    $scope.foods =all_foods[localStorage.getItem('restaurant_name')];
    $scope.back_to_order_details = function(){
        $location.path('/order_details')
    }
    $scope.choose_food = function(food_name){
      localStorage.setItem("food_name", food_name);
      $location.path('/order_details')
    }
  });
