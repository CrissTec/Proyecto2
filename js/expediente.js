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
    });


app.controller('expedienteController', function($scope,connectApi){


    $scope.filter_by_ced = "";

    $scope.pacientes = [];

    $scope.pacientenuevo =  { nombre: "", apellido : "", cedula: "", 
        fechaNacimiento: "", tipoDeSangre: "", nacionalidad: "", 
        lugarDeResidencia: "", telefono: [], username: "", password: ""
    };
    
    $scope.paciente = $scope.paciente = Object.assign({}, $scope.pacientenuevo);



    $scope.getAllPacientes = function(){
        console.log("calling: " + SERVER_IP + 'paciente/1/readpaciente/');
        connectApi.httpGet('paciente/1/readpaciente/')
        .then(function(data){
            console.log(data);
            console.log(data.data != null && data.data != undefined && data.data.status);
            if (data.data != null && data.data != undefined && data.data.status){
                $scope.pacientes = data.data.resultado;
            }
        });
    }


    $scope.getAllPacientes();

    $scope.addPaciente = function(){
        connectApi.httpPost("paciente/1/createpaciente",$scope.paciente)
        .then(function(data){
            $scope.getAllPacientes();
        });
        $scope.paciente = Object.assign({}, $scope.pacientenuevo);
    }
    



    $scope.hideTask = function(){
        $scope.completedTask = false;
    }


    $scope.setPaciente = function(e){
        $scope.paciente = Object.assign({}, e);
    };
    $scope.pacienteNuevo = function(){
        $scope.paciente = Object.assign({}, $scope.pacientenuevo);
    };

    $scope.updatePaciente = function(){
        connectApi.httpPut("paciente/1/"+$scope.paciente.cedula+"/updatepaciente",$scope.paciente)
        .then(function(data){
            $scope.getAllPacientes();
        });

        $scope.pacienteNuevo();

    }

    $scope.removePaciente = function(){
        connectApi.httpDelete("paciente/1/"+$scope.paciente.cedula+"/deletepaciente",{})
        .then(function(data){
            $scope.getAllPacientes();
        });
        $scope.pacienteNuevo();
    }


    $scope.addTelefono = function(){

        console.log($scope.paciente.telefono);
        if ($scope.paciente.telefono[$scope.paciente.telefono.length-1] != '')
            $scope.paciente.telefono.push('');

    }


})
