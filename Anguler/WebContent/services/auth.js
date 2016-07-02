'use strict';

angular.module('loginApp')
.factory('Auth', [ '$http', '$rootScope', '$window', 'Session', 'AUTH_EVENTS', 
function($http, $rootScope, $window, Session, AUTH_EVENTS) {
	var authService = {};
	
	
	//the login function
	authService.login = function(user, success, error) {
		 //alert(user.username+user.password);
		//user.userRole=admin;
		/* $http.post("http://localhost:8703/REST-Demo/rest/student/add",{username:user.username})
			 .success(function(response){
				 alert("done");
			 })
		 .error(function(err){
			 alert("error");
		 });*/
		user.userRole='admin';
	/*	 var myUrl = 'http://localhost:8703/REST-Demo/rest/student/add';

                    

                    return $http({
                        url: myUrl,
                        method: 'POST',
                        data: user,
                        headers: {
                             'Content-Type':  'application/x-www-form-urlencoded; charset=utf-8 '
                        }
                      })
		    .then(function(response) {*/
		            // success
		    	alert("Login Successful");
		    	$window.sessionStorage["userInfo"] = JSON.stringify(user);
				delete user.password;
				Session.create(user);
				$rootScope.currentUser = user;
				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
				success(user);
		  /*  }, 
		    function(response) { // optional
		            // failed
		    	//alert("error");
		    	$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
				error();
		    });*/
		

		
/*		$http.post('misc/users.json').success(function(data) {
		
		//this is my dummy technique, normally here the 
		//user is returned with his data from the db
		var users = data.users;
		if(users[user.username]){
			var loginData = users[user.username];
			//insert your custom login function here 
			if(user.username == loginData.username && user.password == loginData.username){
				//set the browser session, to avoid relogin on refresh
				$window.sessionStorage["userInfo"] = JSON.stringify(loginData);
				
				//delete password not to be seen clientside 
				delete loginData.password;
				
				//update current user into the Session service or $rootScope.currentUser
				//whatever you prefer
				Session.create(loginData);
				//or
				$rootScope.currentUser = loginData;
				
				//fire event of successful login
				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
				//run success function
				success(loginData);
			} else{
				//OR ELSE
				//unsuccessful login, fire login failed event for 
				//the according functions to run
				$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
				error();
			}
		}	
		});*/
		
	};
	
	
	authService.reg = function(formData) {
	
		 var myUrl = 'http://localhost:8703/CybageCRBM/rest/register/registerUser';

                  

                   return $http({
                       url: myUrl,
                       method: 'POST',
                       data: formData,
                       headers: {
                            'Content-Type':  'application/x-www-form-urlencoded; charset=utf-8 '
                       }
                     })
		    .then(function(response) {
		            // success
		    	alert("Registration successful");
		    	
		    }, 
		    function(response) { // optional
		            // failed
		    	alert("error in registration. Please Try again..");
		    	
		    });
	}

	//check if the user is authenticated
	authService.isAuthenticated = function() {
		return !!Session.user;
	};
	
	//check if the user is authorized to access the next route
	//this function can be also used on element level
	//e.g. <p ng-if="isAuthorized(authorizedRoles)">show this only to admins</p>
	authService.isAuthorized = function(authorizedRoles) {
		if (!angular.isArray(authorizedRoles)) {
	      authorizedRoles = [authorizedRoles];
	    }
	    return (authService.isAuthenticated() &&
	      authorizedRoles.indexOf(Session.userRole) !== -1);
	};
	
	//log out the user and broadcast the logoutSuccess event
	authService.logout = function(){
		Session.destroy();
		$window.sessionStorage.removeItem("userInfo");
		$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
	}
	


	return authService;
} ]);