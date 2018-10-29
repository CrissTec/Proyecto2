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
        //metod de http angular
        //connectApi.httpGet(method,msj).then(function(answer) {});
        console.log($scope.user);
        $location.url("main");

    };
})


app.controller('menuCtrl',function($scope,$location){


})



app.controller('menu2Ctrl',function($scope,$location){


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