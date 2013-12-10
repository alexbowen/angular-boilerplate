// testing controller
define([
    'angular',
    'angularMocks',
    'app/application'
], function(angular, mocks, app) {

    describe('authService', function() {
        var $httpBackend, $rootScope, createController;

        beforeEach(function() {
            mocks.module('' +
                '');
            mocks.inject(function($rootScope, $controller) {
                var scope = $rootScope.$new();
//                var application = $controller('transformAdmin', {
//                    $scope: scope
//                });
            });
        });

        beforeEach(inject(function($injector) {

            mocks.module('authService');
            // Set up the mock http service responses
            $httpBackend = $injector.get('$httpBackend');

            // Get hold of a scope (i.e. the root scope)
            //$rootScope = $injector.get('$rootScope');
            // The $controller service is used to create instances of controllers
            var $controller = $injector.get('$controller');

            createController = function() {
                return $controller('authService', {'$scope' : $rootScope });
            };
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
//
//
//        it('should fetch authentication token', function() {
//            $httpBackend.expectGET('/login/authenticate');
//            var controller = createController();
//            $httpBackend.flush();
//        });
//
//
//        it('should send msg to server', function() {
//            var controller = createController();
//            $httpBackend.flush();
//
//            // now you don’t care about the authentication, but
//            // the controller will still send the request and
//            // $httpBackend will respond without you having to
//            // specify the expectation and response for this request
//
//            $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
//            $rootScope.saveMessage('message content');
//            expect($rootScope.status).toBe('Saving...');
//            $httpBackend.flush();
//            expect($rootScope.status).toBe('');
//        });
//
//
//        it('should send auth header', function() {
//            var controller = createController();
//            $httpBackend.flush();
//
//            $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
//                // check if the header was send, if it wasn't the expectation won't
//                // match the request and the test will fail
//                return headers['Authorization'] == 'xxx';
//            }).respond(201, '');
//
//            $rootScope.saveMessage('whatever');
//            $httpBackend.flush();
//        });
    });
});