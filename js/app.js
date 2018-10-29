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
    connectApi.httpPost("login/signin",{username:"crisferlop1",password:"12345"})
    .then(function(data){
        console.log(data);    
    });

    connectApi.httpPost("login/1/login",{usuario:"crisferlop1",password:"12345"})
    .then(function(data){
        console.log(data);    
    });
    
    console.log("login");

    $scope.user={};
	$scope.starPage=function(){//condiciones iniciales
        localStorage.clear();
		localStorage= null;
        document.getElementById('myForm').clear;                        
    };

    $scope.checkUser =  function(){//verificacion de la existencia de un usuario	

        //connectApi.httpGet(method,msj).then(function(answer) {
            //localStorage.setItem('userName', $scope.user.usr);
		    //localStorage.setItem('userId', answer[0].id);
            //localStorage.setItem('userRol', answer[0].rolID);
        //});

        console.log($scope.user);
        $location.url("main");


    };
})


app.controller('menuCtrl',function($scope,$location){
    let rol = localStorage.getItem('userRol');
    $scope.userName=localStorage.getItem('userName');
	$scope.patient=false;
    $scope.doctor=false;
    $scope.doctor=false;
    $scope.admi=false;


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
<<<<<<< HEAD
		var getPromise=$http.get(webSeviceIp + method).then(function (response){
=======
		var getPromise=$http.get(SERVER_IP+method).then(function (response){
	    	return angular.fromJson(response);
		});
		return getPromise;
    },
    
    this.httpGetR= function(method,requestJson){
		var getPromise=$http.get(SERVER_IP+method, JSON.stringify(requestJson)).then(function (response){
>>>>>>> 9c340115b573bdc2abb822c3ffaa559f31db0760
	    	return angular.fromJson(response);
		});
		return getPromise;
	},
	//implementacion del http.post
<<<<<<< HEAD
	this.httpPost= function(requestJson){
		var postPromise=$http.post(webSeviceIp, {frase:JSON.stringify(requestJson)}).then(function(response) {
=======
	this.httpPost= function(method,requestJson){
		var postPromise=$http.post(SERVER_IP+method, JSON.stringify(requestJson)).then(function(response) {
>>>>>>> 9c340115b573bdc2abb822c3ffaa559f31db0760
            console.log(response);
	  		return angular.fromJson(response);
       	});
		return postPromise;
	}
})