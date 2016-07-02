'use strict';

angular.module('loginApp')
.controller('RegCtrl', [ '$scope',  '$modalInstance','Auth',
function($scope,$modalInstance,auth) {
	
	$scope.userData = {};
	
	$scope.close = function () {
		
		
		auth.reg($scope.userData);
		
		$modalInstance.dismiss('cancel');
		};
} ]);
