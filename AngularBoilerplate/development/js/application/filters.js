define(['angular', 'app/services'], function (angular, services) {
	'use strict';

	/* Filters */
  
	return angular.module('filters', ['services'])
		.filter('interpolate', ['version', function(version) {
			return function(text) {
				return String(text).replace(/\%VERSION\%/mg, version);
			};
	}]);
});
