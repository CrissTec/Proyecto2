var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/createDiagnostic", {
        templateUrl : "./../html/doctor/createDiagnostic.html",
        controller : 'createDiagnostic'
    })
});


app.controller('createDiagnostic', function($scope){
    $scope.diagnosticData = {};
    $scope.appointmentRegister = function(){
        console.log($scope.diagnosticData)
        
    };
})