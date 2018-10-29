var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/administrator/tratamiento", {
        templateUrl : "./../html/administrator/tratamiento.html",
        controller : 'tratamientoController'
    })
});


app.controller('tratamientoController', function($scope){
    
    $scope.tratamientos = [
        {id: 1,nombre: "Tratamiento1", lugar: "San Jose", tipo:"Ebais"},
        {id: 2,nombre: "Tratamiento2", lugar: "Heredia", tipo:"Hospital"},
        {id: 3,nombre: "Tratamiento3", lugar: "Alajuela", tipo:"Clinica"},
        {id: 4,nombre: "Tratamiento4", lugar: "Cartago", tipo:"Hospital"},
    ];


    

    $scope.tratamiento = $scope.tratamientos[0];
    $scope.tratamientonuevo = {id: 1, nombre: "", lugar: "", tipo:""};




    $scope.hideTask = function(){
        $scope.completedTask = false;
    }




    $scope.setTratamiento = function(e){
        // $scope.centro = e;
        $scope.tratamiento = {id:e.id,nombre: e.nombre, lugar: e.lugar, tipo: e.tipo};
    };
    $scope.tratamientoNuevo = function(){
        $scope.tratamiento = $scope.tratamientonuevo;
    };

    $scope.updateTratamiento = function(){
        for(var i = 0; i < $scope.tratamientos.length;i++){
            if ($scope.tratamientos[i].id == $scope.tratamiento.id){
                $scope.tratamientos[i]= $scope.tratamiento;
                break;
            }
        }
        $scope.tratamiento = {id:0,nombre: "", lugar: "", tipo:""};
    }

    $scope.removeTratamiento = function(){
        console.log("removing");
        for(var i = 0; i < $scope.tratamientos.length;i++){
            if ($scope.tratamientos[i].id == $scope.tratamiento.id){
                $scope.tratamientos.splice(i,1);
                $scope.completedTask=true;
                break;
            }
        }
        $scope.tratamiento = {id:0,nombre: "", lugar: "", tipo:""};
    }







})