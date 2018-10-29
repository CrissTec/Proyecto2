var app = angular.module("B2", ["ngRoute"]);

const SERVER_IP = "http://localhost:3000/";


app.config(function($routeProvider) {
    $routeProvider
    .when("/login", {
        templateUrl : "./../html/Login.html",
        controller : 'loginCtrl'
    })
    .otherwise({
        redirectTo: '/login'
    });
});


app.controller('loginCtrl', function($scope,$location,connectApi){
    $scope.user={};
	$scope.starPage=function(){//condiciones iniciales
        localStorage.clear();
		localStorage= null;
        document.getElementById('myForm').clear;                        
    };

    $scope.checkUser =  function(){//verificacion de la existencia de un usuario	
        connectApi.httpPost("login/signin",{username: $scope.user.usr,password:$scope.user.pws}).then(function(data){
            localStorage.setItem('userName', $scope.user.usr);
		    localStorage.setItem('userId', data.cedula);
            localStorage.setItem('userRol', data.tipo);
        });

        console.log($scope.user);
        $location.url("main");


    };
})


app.controller('menuCtrl',function($scope,$location){
    $scope.userName=localStorage.getItem('userName');
	$scope.patient=false;
    $scope.doctor=false;
    $scope.secre=false;
    $scope.admi=false;


    $scope.checkRol=function(){
        $scope.userName=localStorage.getItem('userName');
        console.log( $scope.userName)
        let rol = localStorage.getItem('userRol');

        if (rol=="patient") {$scope.patient=true;$scope.doctor=false;$scope.secre=false;$scope.admi=false;}
        else if (rol=="doctor") {$scope.patient=false;$scope.doctor=true;$scope.secre=false;$scope.admi=false;}
        else if (rol=="secretary") {$scope.patient=false;$scope.doctor=false;$scope.secre=true;$scope.admi=false;}
        else if (rol=="admi") {$scope.patient=false;$scope.doctor=false;$scope.secre=false;$scope.admi=true;}
        else {$scope.patient=false;$scope.doctor=false;$scope.secre=false;$scope.admi=false;}
    };


    $scope.logOut=function(){//cierra sesion y se hacegura de borrar el cache de los datos del usuario
		localStorage.clear();
		localStorage= null;
        $location.url('login');
    };


})


app.directive('menu', function() {
    return {
       templateUrl: 'html/Menu.html',
         controller:"menuCtrl"
   };
})


/////////// hay que corregir la que el mae hace con las respueestas despues de jalarlas , pero este es el get y el post basico 

//sevice que sobrecarga http con el fin de hacerlo accesible desde todos los comtroladores
app.service('connectApi',function($http){
	//implementacion del gttp.get
	this.httpGet= function(method){
		var getPromise=$http.get(SERVER_IP+method).then(function (response){
	    	return angular.fromJson(response);
		});
		return getPromise;
    },
    
    this.httpGetR= function(method,requestJson){
		var getPromise=$http.get(SERVER_IP+method, JSON.stringify(requestJson)).then(function (response){
	    	return angular.fromJson(response);
		});
		return getPromise;
	},
	//implementacion del http.post
	this.httpPost= function(method,requestJson){
		var postPromise=$http.post(SERVER_IP+method, JSON.stringify(requestJson)).then(function(response) {
            console.log(response);
	  		return angular.fromJson(response);
       	});
		return postPromise;
	}
})

