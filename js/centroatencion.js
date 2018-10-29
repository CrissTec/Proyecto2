var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/administrator/centroatencion", {
        templateUrl : "./../html/administrator/centroatencion.html",
        controller : 'centroAtencionController'
    })
});


app.controller('centroAtencionController', function($scope,connectApi){

    
    $scope.centros = [];

    $scope.centro = $scope.centros[0];
    $scope.centronuevo = {codigo: "", nombre: "", tipo: "", lugar: "", capacidad: ""};


    $scope.getAllCentros = function(){
        console.log("calling: " + SERVER_IP + 'administrador/1/readcentroDeAtencion/');
        connectApi.httpGet('administrador/1/readcentroDeAtencion/')
        .then(function(data){
            console.log(data);
            console.log(data.data != null && data.data != undefined && data.data.status);
            if (data.data != null && data.data != undefined && data.data.status){
                $scope.centros = data.data.resultado;
            }
        });
    }

    

    $scope.getAllCentros();


    $scope.addCentro = function(){
        connectApi.httpPost("administrador/1/createcentroDeAtencion",$scope.centro)
        .then(function(data){
            $scope.getAllCentros();
        });
        $scope.centro = Object.assign({}, $scope.centronuevo);
    }


    $scope.setCentro = function(e){
        // $scope.centro = e;
        $scope.centro = Object.assign({}, e);
    };
    $scope.centroNuevo = function(){
        $scope.centro = Object.assign({}, $scope.centronuevo);
    };

    $scope.updateCentro = function(){
        connectApi.httpPut("administrador/1/"+$scope.centro.codigo+"/updatecentroDeAtencion",$scope.centro)
        .then(function(data){
            $scope.getAllCentros();
        });
        $scope.centro = Object.assign({}, $scope.centronuevo);
    }

    $scope.removeCentro = function(){
        connectApi.httpDelete("administrador/1/"+$scope.centro.codigo+"/deletecentroDeAtencion",$scope.centro)
        .then(function(data){
            $scope.getAllCentros();
        });
        $scope.centro = Object.assign({}, $scope.centronuevo);
    }

    $scope.hideTask = function(){
        $scope.completedTask = false;
    }

    $scope.listEmpty = function(e){
        return e == null || !e.length || e == [];
    }

})