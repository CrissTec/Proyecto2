var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/appoiments", {
        templateUrl : "./../html/doctor/appointments.html",
        controller : 'appointmentsCtrl'
    })
    });


app.controller('appointmentsCtrl', function($scope){
    $scope.apps=[1,2,3,4,5,6,7,8,9,10];

})



