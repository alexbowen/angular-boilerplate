define([],
function () {
	return ['$scope', '$rootScope', function($scope, $rootScope) {

		$scope.menu = $rootScope.pages;

		$scope.$apply();
	}];
});