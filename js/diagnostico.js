var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/administrator/diagnostico", {
        templateUrl : "./../html/administrator/diagnostico.html",
        controller : 'diagnosticoController'
    })
});


app.controller('diagnosticoController', function($scope){

    $scope.diagnosticos = [
        {id: 1,nombre: "Diagnostico1", lugar: "San Jose", tipo:"Ebais"},
        {id: 2,nombre: "Diagnostico2", lugar: "Heredia", tipo:"Hospital"},
        {id: 3,nombre: "Diagnostico3", lugar: "Alajuela", tipo:"Clinica"},
        {id: 4,nombre: "Diagnostico4", lugar: "Cartago", tipo:"Hospital"},
    ];


    

    $scope.diagnostico = $scope.diagnosticos[0];
    $scope.diagnosticonuevo = {id: 1, nombre: "", lugar: "", tipo:""};


    $scope.hideTask = function(){
        $scope.completedTask = false;
    }




    $scope.setDiagnostico = function(e){
        // $scope.centro = e;
        $scope.diagnostico = {id:e.id,nombre: e.nombre, lugar: e.lugar, tipo: e.tipo};
    };
    $scope.diagnosticoNuevo = function(){
        $scope.diagnostico = $scope.diagnosticonuevo;
    };

    $scope.updateDiagnostico = function(){
        for(var i = 0; i < $scope.diagnosticos.length;i++){
            if ($scope.diagnosticos[i].id == $scope.diagnostico.id){
                $scope.diagnosticos[i]= $scope.diagnostico;
                break;
            }
        }
        $scope.diagnostico = {id:0,nombre: "", lugar: "", tipo:""};
    }

    $scope.removeDiagnostico = function(){
        for(var i = 0; i < $scope.diagnosticos.length;i++){
            if ($scope.diagnosticos[i].id == $scope.diagnostico.id){
                $scope.diagnosticos.splice(i,1);
                $scope.completedTask=true;
                break;
            }
        }
        $scope.diagnostico = {id:0,nombre: "", lugar: "", tipo:""};
    }








})