angular.module('loginApp').config(['$stateProvider', '$urlRouterProvider', 'USER_ROLES',
function($stateProvider, $urlRouterProvider, USER_ROLES) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  
  // Now set up the states
  $stateProvider
  	.state('home', {
      url: "/",
      templateUrl: "templates/home.html",
      data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
      }
    })
  	.state('BookRoom', {
      url: "/BookRoom",
      templateUrl: "templates/BookRoom.html",
      controller:"bookRoomCtrl",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
      }      	  
    })
    .state('MngBooking', {
      url: "/MngBooking",
      templateUrl: "templates/MngBooking.html",
      controller:"DatepickerDemoCtrl",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
      }
    })
    .state('adminStateAddRoom', {
        url: "/adminStateAddRoom",
        templateUrl: "templates/addRoom.html",
  	    controller: "addRoomCtrl",
        data: {
            authorizedRoles: [USER_ROLES.admin]
        }
      })
       .state('adminStateMngRoom', {
        url: "/adminStateMngRoom",
        templateUrl: "templates/deleteRoom.html",
  	  //  controller: "addRoomCtrl",
        data: {
            authorizedRoles: [USER_ROLES.admin]
        }
      })
     
    ;
}]);