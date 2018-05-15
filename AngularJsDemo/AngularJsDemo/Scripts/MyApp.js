var app = angular.module('myApp'[]);

app.controller('demoController', function ($scope) {
    $scope.val = "Hai AngularJS";

    $scope.myFun = function () {      
            alert('Hai welcome');
        }


});