var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/appoiments", {
        templateUrl : "./../html/doctor/appointments.html",
        controller : 'appointmentsCtrl'
    })
    });


app.controller('appointmentsCtrl', function($scope){
    $scope.shit="hola2222";

})



