var app = angular.module("B2")

app.config(function ($routeProvider) {
    $routeProvider
        .when("/expediente/cita-doctor", {
            templateUrl: "./../html/expediente/citadoctor.html",
            controller: 'citaDoctorController'
        })
});


app.controller('citaDoctorController', function ($scope, connectApi) {


    $scope.cedula = "666";

    $scope.filter_by_ced = "";

    $scope.citas = [];
    $scope.citanuevo = { especialidad: "", fecha: "", hora: "", observacion: "" };


    $scope.cita = Object.assign({}, $scope.citanuevo);



    $scope.getAllCitas = function () {
        console.log("calling: " + SERVER_IP + 'cita/1/reportCitaDoctor/');
        connectApi.httpGet('cita/1/reportCitaDoctor/')
            .then(function (data) {
                console.log(data);
                console.log(data.data != null && data.data != undefined && data.data.status);
                if (data.data != null && data.data != undefined && data.data.status) {
                    $scope.citas = data.data.resultado;
                }
            });
    }


    $scope.getAllCitas();

    $scope.addCita = function () {
        connectApi.httpPost("cita/1/" + $scope.cedula + "/sacarCita", $scope.cita)
            .then(function (data) {
                $scope.getAllCitas();
            });
        $scope.cita = Object.assign({}, $scope.citanuevo);
    }

    $scope.hideTask = function () {
        $scope.completedTask = false;
    }


    $scope.setCita = function (e) {
        $scope.cita = Object.assign({}, e);
    };
    $scope.citaNuevo = function () {
        $scope.cita = Object.assign({}, $scope.citanuevo);
    };

    $scope.updateCita = function () {
        connectApi.httpPut("cita/1/" + $scope.cedula + "/updatecita", $scope.cita)
            .then(function (data) {
                $scope.getAllCitas();
            });

        $scope.citaNuevo();

    }

    $scope.removeCita = function () {
        connectApi.httpPut("cita/1/" + $scope.cita._id + "/cancelarCitaPaciente", {})
            .then(function (data) {
                $scope.getAllCitas();
            });
        $scope.citaNuevo();
    }


    $scope.addTelefono = function () {

        console.log($scope.cita.telefono);
        if ($scope.cita.telefono[$scope.cita.telefono.length - 1] != '')
            $scope.cita.telefono.push('');

    }


    //agregarTratamientoCita
    //agregarDiagnosticoCita


    

    $scope.updateCurrentCita = function () {
        connectApi.httpGet('cita/1/reportCitaDoctor/')
            .then(function (data) {
                console.log(data);
                console.log(data.data != null && data.data != undefined && data.data.status);
                if (data.data != null && data.data != undefined && data.data.status) {
                    $scope.citas = data.data.resultado;
                    for (var x = 0; x < $scope.citas.length; x++) {
                        if ($scope.citas[x].cita._id == $scope.cita.cita._id) {
                            console.log("found!");
                            console.log($scope.citas)
                            $scope.cita = Object.assign({}, $scope.citas[x]);
                            break;
                        }
                    }
                }
            });
    }

    $scope.diagnostico_edit = {};
    $scope.addDiagnostico = function () {


        connectApi.httpPost("cita/1/" + $scope.cita.cita._id + "/agregarDiagnosticoCita", $scope.diagnostico_edit)
            .then(function (data) {
                $scope.updateCurrentCita();
            });
        $scope.diagnostico_edit = {};
    }

    $scope.tratamiento_edit = {};
    $scope.addTratamiento = function () {

        //$scope.cita.cita.tratamientos.push($scope.tratamiento_edit);
        connectApi.httpPost("cita/1/" + $scope.cita.cita._id + "/agregarTratamientoCita", $scope.tratamiento_edit)
            .then(function (data) {
                $scope.updateCurrentCita();
            });
        $scope.tratamiento_edit = {};
    }



    //addDiagnostico()

})
