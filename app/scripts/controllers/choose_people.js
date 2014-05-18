'use strict';

angular.module('orderMasterApp')
  .controller('ChoosePeopleCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.people =Person.get_all_people();
    $scope.back_to_order_details = function(){
        $location.path('/order_details')
    }
    $scope.choose_person = function(person_name){
        localStorage.setItem("person_name", person_name);
        $location.path('/order_details')
    }
  });
