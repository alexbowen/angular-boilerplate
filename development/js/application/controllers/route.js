define(['angular'],
function (angular) {
	return ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams) {

		// Getting the page from $routeParams
		var page = $routeParams.page || 'home';

		$scope.$emit('routeLoaded', {page: page});
		$scope.page = $rootScope.pages[page];

		// because this has happened asynchroneusly we've missed
		// Angular's initial call to $apply after the controller has been loaded
		// hence we need to explicityly call it at the end of our Controller constructor
		$scope.$apply();
	}];
});