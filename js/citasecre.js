var app=angular.module("B2")


app.config(function($routeProvider) {
    $routeProvider
    .when("/expediente/cita-secre", {
        templateUrl : "./../html/expediente/citasecre.html",
        controller : 'citaSecreController'
    })
    });


app.controller('citaSecreController', function($scope,connectApi){


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
