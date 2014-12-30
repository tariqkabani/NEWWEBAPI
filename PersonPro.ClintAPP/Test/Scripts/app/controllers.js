'use strict';

/* Controllers */

angular.module('myApp.factories', []).factory('People', ['$resource',
    function ($resource) {
        var resource = $resource('http://support.jedu.gov.sa/api/Men', {}, { get: { method: 'GET', isArray: true } });
        return resource;
    }



]);

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'People', function ($scope, People) {
      $scope.name = 'Tareq';
      $scope.Person = [];

      People.get(function (response) {
          $scope.Person = response;
          console.log(response);
      });
  }])
  .controller('MyCtrl2', ['$scope', 'People', function ($scope, People) {
      $scope.name = '';
      $scope.phone = '';
      $scope.address = '';
      $scope.save = function () {
          People.save({  Name: $scope.name, Phone: $scope.phone, Address:$scope.address }, function (response) {

              if (response) {
                  $scope.notification = 'data is saved';
                  $scope.name = '';
                  $scope.phone = '';
                  $scope.address = '';
              } else {

                  $scope.notification='data is not saved';
              }
              console.log(response);
          });

      };
     

  }]);



