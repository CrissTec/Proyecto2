var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/patientReport", {
        templateUrl : "./../html/main.html",
        controller : 'patientReportCtrl'
    })
    .when("/patientRegister", {
        templateUrl : "./../html/patient/register.html",
        controller : 'patientRegisterCtrl'


});

app.controller('patientRegisterCtrl', function($scope){
    $scope.patientData = {};
    $scope.register = function(){
        console.log($scope.patientData)

    };
})



app.controller('patientReportCtrl', function($scope){
    $scope.patientData = {};
    $scope.register = function(){
        console.log($scope.patientData)

    };
})