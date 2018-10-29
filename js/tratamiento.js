var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/administrator/tratamiento", {
        templateUrl : "./../html/administrator/tratamiento.html",
        controller : 'tratamientoController'
    })
});


app.controller('tratamientoController', function($scope,connectApi){
    
    $scope.tratamientos = [];



    //{id: "T123", nombre: "Cura contra el SIDA", tipo: "Placebo", dosis: "5", monto: "5"}
    $scope.tratamientonuevo = {id: "", nombre: "", tipo: "", dosis: "", monto: ""};
    $scope.tratamiento = Object.assign({}, $scope.tratamientonuevo);

    $scope.getAllTratamientos = function(){
        console.log("calling: " + SERVER_IP + 'administrador/1/readtratamientoCatalogo/');
        connectApi.httpGet('administrador/1/readtratamientoCatalogo/')
        .then(function(data){
            console.log(data);
            console.log(data.data != null && data.data != undefined && data.data.status);
            if (data.data != null && data.data != undefined && data.data.status){
                $scope.tratamientos = data.data.resultado;
            }
        });
    }


    $scope.getAllTratamientos();

    $scope.addTratamiento = function(){
        connectApi.httpPost("administrador/1/createtratamientoCatalogo",$scope.tratamiento)
        .then(function(data){
            $scope.getAllTratamientos();
        });
        $scope.tratamiento = Object.assign({}, $scope.tratamientonuevo);
    }
    



    $scope.hideTask = function(){
        $scope.completedTask = false;
    }




    $scope.setTratamiento = function(e){
        // $scope.centro = e;
        $scope.tratamiento = Object.assign({}, e);
    };
    $scope.tratamientoNuevo = function(){
        $scope.tratamiento = Object.assign({}, $scope.tratamientonuevo);
    };

    $scope.updateTratamiento = function(){
        connectApi.httpPut("administrador/1/"+$scope.tratamiento.id+"/updatetratamientoCatalogo",$scope.tratamiento)
        .then(function(data){
            $scope.getAllTratamientos();
        });

        $scope.tratamientoNuevo();
    }

    $scope.removeTratamiento = function(){

        connectApi.httpDelete("administrador/1/"+$scope.tratamiento.id+"/deletetratamientoCatalogo",$scope.tratamiento)
        .then(function(data){
            $scope.getAllTratamientos();
        });
        $scope.tratamientoNuevo();
    }







})