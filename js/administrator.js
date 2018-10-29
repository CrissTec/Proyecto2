var app=angular.module("B2")

app.config(function($routeProvider) {
    $routeProvider
    .when("/administrator", {
        templateUrl : "./../html/administrator/home.html",
        controller : 'adminController'
    })
    .when("/administrator/funcionario", {
        templateUrl : "./../html/administrator/funcionario.html",
        controller : 'adminController'
    })
    .when("/administrator/diagnostico", {
        templateUrl : "./../html/administrator/diagnostico.html",
        controller : 'adminController'
    })
    .when("/administrator/tratamiento", {
        templateUrl : "./../html/administrator/tratamiento.html",
        controller : 'adminController'
    })
});


app.controller('adminController', function($scope){
    $scope.adminData = {
        
    };
    
    $scope.tratamientos = [
        {id: 1,nombre: "Tratamiento1", lugar: "San Jose", tipo:"Ebais"},
        {id: 2,nombre: "Tratamiento2", lugar: "Heredia", tipo:"Hospital"},
        {id: 3,nombre: "Tratamiento3", lugar: "Alajuela", tipo:"Clinica"},
        {id: 4,nombre: "Tratamiento4", lugar: "Cartago", tipo:"Hospital"},
    ];

    $scope.funcionarios = [
        {id: 1,nombre: "Funcionario1", lugar: "San Jose", tipo:"Ebais"},
        {id: 2,nombre: "Funcionario2", lugar: "Heredia", tipo:"Hospital"},
        {id: 3,nombre: "Funcionario3", lugar: "Alajuela", tipo:"Clinica"},
        {id: 4,nombre: "Funcionario4", lugar: "Cartago", tipo:"Hospital"},
    ];


    $scope.diagnosticos = [
        {id: 1,nombre: "Diagnostico1", lugar: "San Jose", tipo:"Ebais"},
        {id: 2,nombre: "Diagnostico2", lugar: "Heredia", tipo:"Hospital"},
        {id: 3,nombre: "Diagnostico3", lugar: "Alajuela", tipo:"Clinica"},
        {id: 4,nombre: "Diagnostico4", lugar: "Cartago", tipo:"Hospital"},
    ];


    

    $scope.tratamiento = $scope.tratamientos[0];
    $scope.tratamientonuevo = {id: 1, nombre: "", lugar: "", tipo:""};


    $scope.funcionario = $scope.funcionarios[0];
    $scope.funcionarionuevo = {id: 1, nombre: "", lugar: "", tipo:""};

    $scope.diagnostico = $scope.diagnosticos[0];
    $scope.diagnosticonuevo = {id: 1, nombre: "", lugar: "", tipo:""};

    $scope.adminController = function(){
        console.log($scope.adminData);
    };


    $scope.setCentro = function(e){
        // $scope.centro = e;
        $scope.centro = {id:e.id,nombre: e.nombre, lugar: e.lugar, tipo: e.tipo};
    };
    $scope.centroNuevo = function(){
        $scope.centro = $scope.centronuevo;
    };

    $scope.updateCentro = function(){
        console.log("updating");
        for(var i = 0; i < $scope.centros.length;i++){
            console.log("searching");
            if ($scope.centros[i].id == $scope.centro.id){
                console.log("found");
                $scope.centros[i]= $scope.centro;
                break;
            }
        }
        $scope.centro = {id:0,nombre: "", lugar: "", tipo:""};
    }

    $scope.removeCentro = function(){
        console.log("removing");
        for(var i = 0; i < $scope.centros.length;i++){
            console.log("searching");
            if ($scope.centros[i].id == $scope.centro.id){
                console.log("found");
                $scope.centros.splice(i,1);
                $scope.completedTask=true;
                break;
            }
        }
        $scope.centro = {id:0,nombre: "", lugar: "", tipo:""};
    }

    $scope.hideTask = function(){
        $scope.completedTask = false;
    }




    $scope.setTratamiento = function(e){
        // $scope.centro = e;
        $scope.tratamiento = {id:e.id,nombre: e.nombre, lugar: e.lugar, tipo: e.tipo};
    };
    $scope.tratamientoNuevo = function(){
        $scope.tratamiento = $scope.tratamientonuevo;
    };

    $scope.updateTratamiento = function(){
        for(var i = 0; i < $scope.tratamientos.length;i++){
            if ($scope.tratamientos[i].id == $scope.tratamiento.id){
                $scope.tratamientos[i]= $scope.tratamiento;
                break;
            }
        }
        $scope.tratamiento = {id:0,nombre: "", lugar: "", tipo:""};
    }

    $scope.removeTratamiento = function(){
        console.log("removing");
        for(var i = 0; i < $scope.tratamientos.length;i++){
            if ($scope.tratamientos[i].id == $scope.tratamiento.id){
                $scope.tratamientos.splice(i,1);
                $scope.completedTask=true;
                break;
            }
        }
        $scope.tratamiento = {id:0,nombre: "", lugar: "", tipo:""};
    }




    $scope.setFuncionario = function(e){
        // $scope.centro = e;
        $scope.funcionario = {id:e.id,nombre: e.nombre, lugar: e.lugar, tipo: e.tipo};
    };
    $scope.funcionarioNuevo = function(){
        $scope.funcionario = $scope.funcionarionuevo;
    };

    $scope.updateFuncionario = function(){
        for(var i = 0; i < $scope.funcionarios.length;i++){
            if ($scope.funcionarios[i].id == $scope.funcionario.id){
                $scope.funcionarios[i]= $scope.funcionario;
                break;
            }
        }
        $scope.funcionario = {id:0,nombre: "", lugar: "", tipo:""};
    }

    $scope.removeFuncionario = function(){
        console.log("removing");
        for(var i = 0; i < $scope.funcionarios.length;i++){
            console.log("searching");
            if ($scope.funcionarios[i].id == $scope.funcionario.id){
                console.log("found");
                $scope.funcionarios.splice(i,1);
                $scope.completedTask=true;
                break;
            }
        }
        $scope.funcionario = {id:0,nombre: "", lugar: "", tipo:""};
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