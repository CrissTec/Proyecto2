var app=angular.module("B2")


app.config(function($routeProvider) {
    $routeProvider
    .when("/expediente/cita-paciente", {
        templateUrl : "./../html/expediente/citapaciente.html",
        controller : 'citaPacienteController'
    })
    });


app.controller('citaPacienteController', function($scope,connectApi){


    $scope.cedula = "666";

    $scope.filter_by_ced = "";
    
    $scope.citas = [ ];
    $scope.citanuevo = { especialidad: "", fecha: "", hora: "", observacion: ""};

    
    $scope.cita = Object.assign({}, $scope.citanuevo);



    $scope.getAllCitas = function(){
        console.log("calling: " + SERVER_IP + 'cita/1/'  + $scope.cedula + '/reportCitaPaciente/');
        connectApi.httpGet('cita/1/' + $scope.cedula + '/reportCitaPaciente/')
        .then(function(data){
            console.log(data);
            console.log(data.data != null && data.data != undefined && data.data.status);
            if (data.data != null && data.data != undefined && data.data.status){
                $scope.citas = data.data.resultado;
            }
        });
    }


    $scope.getAllCitas();

    $scope.addCita = function(){
        connectApi.httpPost("cita/1/" + $scope.cedula + "/sacarCita",$scope.cita)
        .then(function(data){
            $scope.getAllCitas();
        });
        $scope.cita = Object.assign({}, $scope.citanuevo);
    }

    $scope.hideTask = function(){
        $scope.completedTask = false;
    }


    $scope.setCita = function(e){
        $scope.cita = Object.assign({}, e);
    };
    $scope.citaNuevo = function(){
        $scope.cita = Object.assign({}, $scope.citanuevo);
    };

    $scope.updateCita = function(){
        connectApi.httpPut("cita/1/"+$scope.cedula+"/updatecita",$scope.cita)
        .then(function(data){
            $scope.getAllCitas();
        });

        $scope.citaNuevo();

    }

    $scope.removeCita = function(){
        connectApi.httpPut("cita/1/" + $scope.cita._id +"/cancelarCitaPaciente",{})
        .then(function(data){
            $scope.getAllCitas();
        });
        $scope.citaNuevo();
    }


    $scope.addTelefono = function(){

        console.log($scope.cita.telefono);
        if ($scope.cita.telefono[$scope.cita.telefono.length-1] != '')
            $scope.cita.telefono.push('');

    }

})
