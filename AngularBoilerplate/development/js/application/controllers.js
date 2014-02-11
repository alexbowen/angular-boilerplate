define([
    'angular',
    'config',
    'app/controllers/application',
    'app/controllers/route',
    'app/controllers/partial/login',
    'app/controllers/partial/menu'
], function (angular) {
	'use strict';

	return angular.module('controllers', ['APPLICATION'])

	    .controller('ApplicationController', ['$scope', '$injector', function($scope, $injector) {
			require(['app/controllers/application'], function(application) {
				$injector.invoke(application, this, {'$scope': $scope});
			});
		}])
	    .controller('RouteController', ['$scope', '$injector', function($scope, $injector) {
			require(['app/controllers/route'], function(route) {
				$injector.invoke(route, this, {'$scope': $scope});
			});
		}])
        .controller('LoginController', ['$scope', '$injector', function($scope, $injector) {
            require(['app/controllers/partial/login'], function(login) {
                $injector.invoke(login, this, {'$scope': $scope});
            });
        }])
        .controller('MenuController', ['$scope', '$injector', function($scope, $injector) {
            require(['app/controllers/partial/menu'], function(menu) {
                $injector.invoke(menu, this, {'$scope': $scope});
            });
        }]);
});