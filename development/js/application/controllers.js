define(['angular'],
function (angular) {
	'use strict';

	return angular.module('controllers', [])

		// More involved example where controller is required from an external file
		.controller('ApplicationController', ['$scope', '$injector', function($scope, $injector) {
			require(['app/controllers/main'], function(main) {

				// injector method takes an array of modules as the first argument
				// if you want your controller to be able to use components from
				// any of your other modules, make sure you include it together with 'ng'
				// Furthermore we need to pass on the $scope as it's unique to this controller
				$injector.invoke(main, this, {'$scope': $scope});
			});
		}])
		.controller('RouteController', ['$scope', '$injector', function($scope, $injector) {
			require(['app/controllers/route'], function(route) {
				$injector.invoke(route, this, {'$scope': $scope});
			});
		}])
        .controller('LoginController', ['$scope', '$injector', '$location', '$http', 'authService', '$rootScope', '$window',
            function($scope, $injector, $location, $http, authService, $rootScope, $window) {
            require(['app/controllers/partial/login'], function(route) {
                $injector.invoke(route, this, {'$scope': $scope});
            });
        }]
	);
});