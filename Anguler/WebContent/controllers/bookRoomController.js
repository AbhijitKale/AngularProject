'use strict';

angular.module('loginApp')
.controller('bookRoomCtrl', ['$scope','$http',
function ($scope,$http) {
	 $scope.roomInfo={};
	  
	 
 
  
  $scope.valuationDate = new Date();
  $scope.valuationDatePickerIsOpen = false;
  $scope.opens = [];
  
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
  
  $scope.roomInfo.facilities=[];
  
  /*
  */
  $scope.$watch(function () {
       return $scope.valuationDatePickerIsOpen;
   },function(value){
	   $scope.opens.push("valuationDatePickerIsOpen: " + value + " at: " + new Date());
   });
  
  $scope.valuationDatePickerOpen = function ($event) {
    
      if ($event) {
          $event.preventDefault();
          $event.stopPropagation(); // This is the magic
      }
      this.valuationDatePickerIsOpen = true;
  };
  
  $scope.doi=function()
  {
	  $scope.roomInfo.booking_date=$scope.valuationDate;
	  alert($scope.valuationDate);
	  angular.forEach($scope.tags,function(value,index){
          if(value.enabled===true)
         	 $scope.roomInfo.facilities.push(value.text);
      })
	  alert($scope.roomInfo.facilities);
	  var myUrl = 'http://localhost:8703/REST-Demo/rest/student/book';

      

      return $http({
          url: myUrl,
          method: 'POST',
          data: $scope.roomInfo,
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
  
  
 
  
}]);