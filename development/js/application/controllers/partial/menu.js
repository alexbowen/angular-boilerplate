define(['angular'],
function (angular) {
	return ['$scope', '$rootScope', function($scope, $rootScope) {

		$scope.menu = $rootScope.pages;

		$scope.$apply();
	}];
});