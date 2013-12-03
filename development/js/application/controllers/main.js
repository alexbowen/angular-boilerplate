define(['angular'],
function (angular) {
	return ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
        // Load pages on startup
        $http.get('pages.json').success(function (data) {
            $rootScope.pages = data;
        });

          // Set the page for menu active class
        $scope.$on('routeLoaded', function (event, args) {

            $scope.page = args.page;

            // because this has happened asynchroneusly we've missed
            // Angular's initial call to $apply after the controller has been loaded
            // hence we need to explicityly call it at the end of our Controller constructor
            $scope.$apply();
		});
	}];
});
