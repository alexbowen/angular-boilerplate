/*global describe beforeEach it expect */
define([
    'angular',
    'angularMocks',
    'app/bootstrap',
    'packages/main'
], function(angular, mocks, app) {
	'use strict';

	describe('directives', function() {
		beforeEach(mocks.module('directives'));

		describe('app-version', function() {
			it('should print current version', function() {
				mocks.module(function($provide) {
					$provide.value('version', 'TEST_VER');
				});
				mocks.inject(function($compile, $rootScope) {
					var element = $compile('<span app-version></span>')($rootScope);
					expect(element.text()).toEqual('TEST_VER');
				});
			});
		});

        describe('login', function() {
            it('should print current version', function() {
                mocks.module(function($provide) {

                });
                mocks.inject(function($compile, $rootScope) {
                    if (!$rootScope.authenticated)  {

                    }
                });
            });
        });
	});
});
