var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/administrator", {
        templateUrl : "./../html/administrator/home.html",
        controller : 'adminController'
    })
    .when("/administrator/centroatencion", {
        templateUrl : "./../html/administrator/centroatencion.html",
        controller : 'adminController'
    })
    .when("/administrator/funcionario", {
        templateUrl : "./../html/administrator/funcionario.html",
        controller : 'adminController'
    })
    .when("/administrator/diagnostico", {
        templateUrl : "./../html/administrator/diagnostico.html",
        controller : 'adminController'
    })
    .when("/administrator/tratamiento", {
        templateUrl : "./../html/administrator/tratamiento.html",
        controller : 'adminController'
    })
});


app.controller('adminController', function($scope){
    $scope.adminData = {
        
    };
    
    $scope.centros = [
            {id: 1,nombre: "Centro1", lugar: "San Jose", tipo:"Ebais"},
            {id: 2,nombre: "Centro2", lugar: "Heredia", tipo:"Hospital"},
            {id: 3,nombre: "Centro3", lugar: "Alajuela", tipo:"Clinica"},
            {id: 4,nombre: "Centro4", lugar: "Cartago", tipo:"Hospital"},
            {id: 5,nombre: "Centro5", lugar: "Puntarenas", tipo:"Psiquiatrico"},
            {id: 6,nombre: "Centro6", lugar: "Puntarenas", tipo:"Psiquiatrico"},
            {id: 7,nombre: "Centro7", lugar: "Puntarenas", tipo:"Psiquiatrico"},
            {id: 8,nombre: "Centro8", lugar: "Puntarenas", tipo:"Psiquiatrico"},
            {id: 9,nombre: "Centro9", lugar: "Puntarenas", tipo:"Psiquiatrico"}
    ];
    $scope.centro = $scope.centros[0];
    $scope.centronuevo = {id: 1, nombre: "", lugar: "", tipo:""};
    $scope.adminController = function(){
        console.log($scope.adminData);
    };
    $scope.setCentro = function(e){
        // $scope.centro = e;
        $scope.centro = {id:e.id,nombre: e.nombre, lugar: e.lugar, tipo: e.tipo};
    };
    $scope.centroNuevo = function(){
        $scope.centro = $scope.centronuevo;
    };

    $scope.updateCentro = function(){
        console.log("updating");
        for(var i = 0; i < $scope.centros.length;i++){
            console.log("searching");
            if ($scope.centros[i].id == $scope.centro.id){
                console.log("found");
                $scope.centros[i]= $scope.centro;
                break;
            }
        }
        $scope.centro = {id:0,nombre: "", lugar: "", tipo:""};
    }

    $scope.removeCentro = function(){
        console.log("removing");
        for(var i = 0; i < $scope.centros.length;i++){
            console.log("searching");
            if ($scope.centros[i].id == $scope.centro.id){
                console.log("found");
                $scope.centros.splice(i,1);
                $scope.completedTask=true;
                break;
            }
        }
        $scope.centro = {id:0,nombre: "", lugar: "", tipo:""};
    }

    $scope.hideTask = function(){
        $scope.completedTask = false;
    }


})