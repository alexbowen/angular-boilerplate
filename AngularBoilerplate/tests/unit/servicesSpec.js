/*global describe beforeEach it expect */
define([
	'angular',
	'angularMocks',
	'app/bootstrap',
    'packages/main'
], function(angular, mocks, app) {
	'use strict';

	describe('service', function() {
		beforeEach(mocks.module('services'));
		describe('version', function() {
			it('should return current version', mocks.inject(function(version) {
				expect(version).toEqual('0.1');
			}));
		});
	});
});