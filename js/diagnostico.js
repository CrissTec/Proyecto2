var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/administrator/diagnostico", {
        templateUrl : "./../html/administrator/diagnostico.html",
        controller : 'diagnosticoController'
    })
});


app.controller('diagnosticoController', function($scope,connectApi){

    $scope.diagnosticos = [
        {id: "123", nombre: "1452", descripcion: "asdf", sintomas: ["asdf","asdf2","asdf3"], tratamiento: ["Acetaminofen","acetaminofen2"]},
        {id: "", nombre: "", descripcion: "", sintomas: "", tratamiento: ""},
        {id: "", nombre: "", descripcion: "", sintomas: "", tratamiento: ""}  
    ];


    $scope.listEmpty = function(e){
        return e == null || !e.length || e == [];
    }


    $scope.diagnostico = $scope.diagnosticos[0];
    $scope.diagnosticonuevo = {id: "", nombre: "", descripcion: "", sintomas: [], tratamiento: []};


    $scope.hideTask = function(){
        $scope.completedTask = false;
    }


    $scope.getAllDiagnosticos = function(){
        console.log("calling: " + SERVER_IP + 'administrador/1/readdiagnosticoCatalogo/');
        connectApi.httpGet('administrador/1/readdiagnosticoCatalogo/')
        .then(function(data){
            console.log(data);
            console.log(data.data != null && data.data != undefined && data.data.status);
            if (data.data != null && data.data != undefined && data.data.status){
                $scope.diagnosticos = data.data.resultado;
            }
        });
    }


    $scope.getAllDiagnosticos();


    $scope.addDiagnostico = function(){
        connectApi.httpPost("administrador/1/creatediagnosticoCatalogo",$scope.diagnostico)
        .then(function(data){
            $scope.getAllDiagnosticos();
        });
        $scope.centro = Object.assign({}, $scope.diagnosticonuevo);
    }


    $scope.setDiagnostico = function(e){
        // $scope.centro = e;
        $scope.diagnostico = Object.assign({}, e);
    };
    $scope.diagnosticoNuevo = function(){
        $scope.diagnostico = Object.assign({}, $scope.diagnosticonuevo);
    };

    $scope.updateDiagnostico = function(){
        connectApi.httpPut("administrador/1/"+$scope.diagnostico.id+"/updatediagnosticoCatalogo",$scope.diagnostico)
        .then(function(data){
            $scope.getAllDiagnosticos();
        });
        $scope.centro = Object.assign({}, $scope.diagnostico);

    }

    $scope.removeDiagnostico = function(){

        connectApi.httpDelete("administrador/1/"+$scope.diagnostico.id+"/deletediagnosticoCatalogo",{})
        .then(function(data){
            $scope.getAllDiagnosticos();
        });
        $scope.centro = Object.assign({}, $scope.diagnosticonuevo);

    }


    $scope.addSintoma = function(){

        console.log($scope.diagnostico.sintomas);
        if ($scope.diagnostico.sintomas[$scope.diagnostico.sintomas.length-1] != '')
            $scope.diagnostico.sintomas.push('');

    }

    $scope.addTratamiento = function(){

        console.log($scope.diagnostico.tratamiento);
        if ($scope.diagnostico.tratamiento[$scope.diagnostico.tratamiento.length-1] != '')
            $scope.diagnostico.tratamiento.push('');

    }







})