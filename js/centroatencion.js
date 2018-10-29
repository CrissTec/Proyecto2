var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/administrator/centroatencion", {
        templateUrl : "./../html/administrator/centroatencion.html",
        controller : 'centroAtencionController'
    })
});


app.controller('centroAtencionController', function($scope){
    
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


    $scope.setCentro = function(e){
        // $scope.centro = e;
        $scope.centro = {id:e.id,nombre: e.nombre, lugar: e.lugar, tipo: e.tipo};
    };
    $scope.centroNuevo = function(){
        $scope.centro = $scope.centronuevo;
    };

    $scope.updateCentro = function(){
        for(var i = 0; i < $scope.centros.length;i++){
            if ($scope.centros[i].id == $scope.centro.id){
                $scope.centros[i]= $scope.centro;
                break;
            }
        }
        $scope.centro = {id:0,nombre: "", lugar: "", tipo:""};
    }

    $scope.removeCentro = function(){
        for(var i = 0; i < $scope.centros.length;i++){
            if ($scope.centros[i].id == $scope.centro.id){
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