var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/patientReport", {
        templateUrl : "./../html/main.html",
        controller : 'patientReportCtrl'
    })
    .when("/patientRegister", {
        templateUrl : "./../html/patient/register.html",
        controller : 'registerCtrl'
    })
});

app.controller('registerCtrl', function($scope){
    $scope.patientData = {};
    $scope.register = function(){
        console.log($scope.patientData)

    };
})