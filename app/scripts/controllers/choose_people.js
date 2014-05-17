'use strict';

angular.module('orderMasterApp')
  .controller('ChoosePeopleCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.people =[
        {
            "name":"赵大"
        },
        {
            "name":"钱二"
        },
        {
            "name":"张三"
        },
        {
            "name":"李四"
        },
        {
            "name":"王五"
        },
        {
            "name":"刘六"
        }
    ];
  });
