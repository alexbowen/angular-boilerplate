/*global describe beforeEach it expect */

define([
    'angular',
    'angularMocks',
    'app/application'
], function(angular, mocks, app) {
	'use strict';

	describe('application', function(){
		var application, scope;

		beforeEach(function() {
			mocks.module('controllers');
			mocks.inject(function($rootScope, $controller) {
				scope = $rootScope.$new();
				application = $controller('application', {
					$scope: scope
				});
			});
		});
	});
});