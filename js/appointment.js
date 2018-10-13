var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/appointmentRegister", {
        templateUrl : "./../html/patient/appointmentRegister.html",
        controller : 'appointmentRegister'
    })
});


app.controller('appointmentRegister', function($scope){
    $scope.appointmentData = {};
    $scope.appointmentRegister = function(){
        console.log($scope.appointmentData)
        
    };
})