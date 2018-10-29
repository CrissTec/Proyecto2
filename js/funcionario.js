var app=angular.module("B2")

// class Funcionario {
//     cedula = "";
//     nombre = "";
//     apellido = "";
//     fechaDeIngreso = new Date();
//     tipo = "";
//     area = "";
// }

app.config(function($routeProvider) {
    $routeProvider
    .when("/administrator/funcionario", {
        templateUrl : "./../html/administrator/funcionario.html",
        controller : 'funcionarioController'
    })
});


app.controller('funcionarioController', function($scope,connectApi){

    $scope.funcionarios = [];


    

    $scope.funcionario = $scope.funcionarios[0];
    $scope.funcionarionuevo ={cedula: "1",nombre: "",apellido:"", fechaDeIngreso:new Date(),area:"", tipo:""};


    $scope.hideTask = function(){
        $scope.completedTask = false;
    }

    $scope.getAllfuncionarios = function(){
        console.log("calling: " + SERVER_IP + 'administrador/1/readfuncionario/');
        connectApi.httpGet('administrador/1/readfuncionario/')
        .then(function(data){
            console.log(data);
            console.log(data.data != null && data.data != undefined && data.data.status);
            if (data.data != null && data.data != undefined && data.data.status){
                $scope.funcionarios = data.data.resultado;
            }
        });
    }

    $scope.getAllfuncionarios();

    $scope.setFuncionario = function(e){
        // $scope.centro = e;
        $scope.funcionario = Object.assign({}, e);
    };
    $scope.funcionarioNuevo = function(){
        $scope.funcionario = Object.assign({}, $scope.funcionarionuevo);
    };

    $scope.addFuncionario = function(){
        connectApi.httpPost("administrador/1/createfuncionario",$scope.funcionario)
        .then(function(data){
            $scope.getAllfuncionarios();
        });
        $scope.funcionario = Object.assign({}, $scope.funcionarionuevo);
    }

    $scope.updateFuncionario = function(){
        //updatefuncionario
        connectApi.httpPut("administrador/1/"+$scope.funcionario.cedula+"/updatefuncionario",$scope.funcionario)
        .then(function(data){
            $scope.getAllfuncionarios();
        });
        $scope.funcionario = Object.assign({}, $scope.funcionarionuevo);

    }

    $scope.removeFuncionario = function(){
        connectApi.httpDelete("administrador/1/"+$scope.funcionario.cedula+"/deletefuncionario",$scope.funcionario)
        .then(function(data){
            $scope.getAllfuncionarios();
        });
        $scope.funcionario = Object.assign({}, $scope.funcionarionuevo);
    }

    $scope.listEmpty = function(e){
        return e == null || !e.length || e == [];
    }



})