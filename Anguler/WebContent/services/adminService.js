'use strict';

angular.module('loginApp').service('adminServ', function($http,$rootScope, USER_ROLES) {
	
	

	this.addRoom = function(formData) {
	
		 var myUrl = 'http://localhost:8703/REST-Demo/rest/student/room';

                  

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
		    	alert("Room Added successful");
		    	
		    }, 
		    function(response) { // optional
		            // failed
		    	alert("error in addin room. Please Try again..");
		    	
		    });
	}

	return this;
});
	

	
	
	

