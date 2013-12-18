/*global describe beforeEach it expect */

define([
    'angular',
    'angularMocks',
    'app/controllers/application',
    'config'
], function(angular, mocks, ApplicationController, APPLICATION) {
    'use strict';

    describe('ApplicationController', function () {
        var scope;

        beforeEach(angular.mock.inject(function($rootScope, $controller) {
            //create an empty scope
            scope = $rootScope.$new();
            //declare the controller and inject our empty scope
            $controller(ApplicationController, {
                $scope  : scope,
                APPLICATION : APPLICATION
            });
        }));

        it('test test', function () {
            expect(scope.title).toBe('Deer Hunter');
        });
    });
});