define(['angular', 'app/services'], function(angular, services) {
	'use strict';

  /* Directives */

	angular.module('directives', ['services'])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
		};
	}]);
});
