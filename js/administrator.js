var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/administrator", {
        templateUrl : "./../html/administrator/home.html",
        controller : 'adminController'
    })
});


app.controller('adminController', function($scope){


})