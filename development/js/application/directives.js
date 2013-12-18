define(['angular', 'app/services', 'app/controllers'], function (angular, services, controllers) {
	'use strict';
    /* Directives */

	return angular.module('directives', ['services', 'controllers'])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
		};
	}])
<<<<<<< HEAD
	.directive('login', function() {
=======
	.directive('login', ['$compile', function($compile) {
>>>>>>> master
		return {
			restrict: 'E',
            controller: 'LoginController',
			templateUrl: 'js/application/view/partial/login.tpl',
			link: function(scope, element, attrs) {

			}
		};
<<<<<<< HEAD
	})
    .directive('getversion', function() {
        return {
            restrict: 'E',
            controller: 'GetVersionController',
            templateUrl: 'development/js/application/view/partial/get.tpl',
            link: function(scope, element, attrs) {

            }
        };
    })
    .directive('setversion', function() {
        return {
            restrict: 'E',
            controller: 'SetVersionController',
            templateUrl: 'development/js/application/view/partial/set.tpl',
            link: function(scope, element, attrs) {

            }
        };
    });
=======
	}]);
>>>>>>> master
});
