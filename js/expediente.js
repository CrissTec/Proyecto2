var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/expediente", {
        templateUrl : "./../html/expediente/home.html",
        controller : 'expedienteController'
    })
    .when("/expediente/paciente", {
        templateUrl : "./../html/expediente/paciente.html",
        controller : 'expedienteController'
    })
    .when("/expediente/paciente/all", {
        templateUrl : "./../html/expediente/pacientes.html",
        controller : 'expedienteController'
    })
    .when("/expediente/cita", {
        templateUrl : "./../html/expediente/cita.html",
        controller : 'expedienteController'
    })
    .when("/expediente/cita/all", {
        templateUrl : "./../html/citas/home.html",
        controller : 'expedienteController'
    })
    });


app.controller('expedienteController', function($scope){


    $scope.pacientes = [
        {id: 1,nombre: "Paciente1", lugar: "San Jose", tipo:"Ebais"},
        {id: 2,nombre: "Paciente2", lugar: "Heredia", tipo:"Hospital"},
        {id: 3,nombre: "Paciente3", lugar: "Alajuela", tipo:"Clinica"},
        {id: 4,nombre: "Paciente4", lugar: "Cartago", tipo:"Hospital"},
    ];

    
    $scope.paciente = $scope.pacientes[0];
    $scope.pacientenuevo = {id: 1, nombre: "", lugar: "", tipo:""};



    $scope.setPaciente = function(e){
        // $scope.centro = e;
        $scope.paciente = {id:e.id,nombre: e.nombre, lugar: e.lugar, tipo: e.tipo};
    };
    $scope.pacienteNuevo = function(){
        $scope.paciente = $scope.pacientenuevo;
    };

    $scope.updatePaciente = function(){
        for(var i = 0; i < $scope.pacientes.length;i++){
            if ($scope.pacientes[i].id == $scope.paciente.id){
                $scope.pacientes[i]= $scope.paciente;
                break;
            }
        }
        $scope.paciente = {id:0,nombre: "", lugar: "", tipo:""};
    }

    $scope.removePaciente = function(){
        for(var i = 0; i < $scope.pacientes.length;i++){
            if ($scope.pacientes[i].id == $scope.paciente.id){
                $scope.pacientes.splice(i,1);
                $scope.completedTask=true;
                break;
            }
        }
        $scope.paciente = {id:0,nombre: "", lugar: "", tipo:""};
    }




    //-------------------------------------------------------------------------------------------
    //CITAS
    //-------------------------------------------------------------------------------------------
    

    
    $scope.citas = [
        {id: 1,nombre: "Cita1", lugar: "San Jose", tipo:"Ebais"},
        {id: 2,nombre: "Cita2", lugar: "Heredia", tipo:"Hospital"},
        {id: 3,nombre: "Cita3", lugar: "Alajuela", tipo:"Clinica"},
        {id: 4,nombre: "Cita4", lugar: "Cartago", tipo:"Hospital"},
    ];

    
    $scope.cita = $scope.citas[0];
    $scope.citanuevo = {id: 1, nombre: "", lugar: "", tipo:""};



    $scope.setCita = function(e){
        // $scope.centro = e;
        $scope.cita = {id:e.id,nombre: e.nombre, lugar: e.lugar, tipo: e.tipo};
    };
    $scope.citaNuevo = function(){
        $scope.cita = $scope.citanuevo;
    };

    $scope.updateCita = function(){
        for(var i = 0; i < $scope.citas.length;i++){
            if ($scope.citas[i].id == $scope.cita.id){
                $scope.citas[i]= $scope.cita;
                break;
            }
        }
        $scope.cita = {id:0,nombre: "", lugar: "", tipo:""};
    }

    $scope.removeCita = function(){
        for(var i = 0; i < $scope.citas.length;i++){
            if ($scope.citas[i].id == $scope.cita.id){
                $scope.citas.splice(i,1);
                $scope.completedTask=true;
                break;
            }
        }
        $scope.cita = {id:0,nombre: "", lugar: "", tipo:""};
    }










})
