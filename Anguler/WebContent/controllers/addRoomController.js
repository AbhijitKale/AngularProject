'use strict';

angular.module('loginApp')
.controller('addRoomCtrl', [ '$scope','$http',
function($scope,$http) {
	$scope.roomData={};
/*	$scope.facilityList = ['Projector','WiFi','Multiple Computers','Video Conferencing','White Board'];
	
	$scope.list = {
		    facilities: ['WiFi']
		  };*/
	
	$scope.tags = [{
		  text: 'Projector',
		  enabled: false
		},
		{
			  text: 'WiFi',
			  enabled: false
			},
		{
			  text: 'Multiple Computers',
			  enabled: false
			},
		{
			  text: 'Video Conferencing',
			  enabled: false
			},
		{
			  text: 'White Board',
			  enabled: false
			}]
	
	
	$scope.add=function()
	{
		$scope.roomData.facilities=[];
		 angular.forEach($scope.tags,function(value,index){
             if(value.enabled===true)
            	 $scope.roomData.facilities.push(value.text);
         })

		 var myUrl = 'http://localhost:8706/CybageCRBM/rest/roomController/addRoom';

                 

                  return $http({
                      url: myUrl,
                      method: 'POST',
                      data: $scope.roomData,
                      headers: {
                           'Content-Type':  'application/x-www-form-urlencoded; charset=utf-8 '
                      }
                    })
		    .then(function(response) {
		            // success
		    	alert("Room added successfully");
		    	
		    }, 
		    function(response) { // optional
		            // failed
		    	alert("error in adding room. Please Try again..");
		    	
		    });
	}
	
	//service.addRoom(roomData);
} ]);
