define([
    'angular',
    'angularMocks',
    'app/controllers/partial/login',
    'app/services/auth',
    'utils/application',
    'mocks'
], function (angular, mocks, LoginController, AuthService, utils) {

    describe('LoginController', function() {
        var $httpBackend, scope;

        beforeEach(function() {
            mocks.module('AuthService');
            mocks.inject(function($rootScope, $controller, AuthServiceProvider) {
                scope = $rootScope.$new();
                $controller(LoginController, {
                    $scope: scope,
                    AuthServiceProvider:AuthServiceProvider
                });
            });
        });

        beforeEach(inject(function($injector) {

            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.whenPOST('/login/authenticate', function (data) {
                var body = angular.fromJson(data);
                return utils.validatePassword(body.pass) ? true : false;
            }).respond({
                "StatusCode":200,
                "StatusMessage":"you are logged in",
                'authToken' : '29277243-a184-4fe6-a815-211600dfe146'
            });

            $httpBackend.whenPOST('/login/authenticate', function (data) {
                var body = angular.fromJson(data);
                return !utils.validatePassword(body.pass) ? true : false;
            }).respond({
                "StatusCode":403,
                "StatusMessage":"authorisation failed"
            });

            $httpBackend.whenGET('/login/authenticate').respond({
                "StatusCode":401,
                "StatusMessage":"bad request (GET)"
            });
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });


        it('authentication success', function() {
            $httpBackend.expectPOST('/login/authenticate', {"user":"alex","pass":"Password1"});

            scope.user = {};
            scope.user.name = 'alex';
            scope.user.pass = 'Password1'
            scope.authenticate();
            $httpBackend.flush();

            expect(scope.showLogin).toEqual(false);
            expect(scope.error).toBeUndefined();
        });

        it('authentication fail', function() {

            scope.user = {};
            scope.user.name = 'alex';
            scope.user.pass = 'password'

            //no request should be made here
            scope.authenticate();

            expect(scope.showLogin).toEqual(true);
            expect(scope.error).toBeDefined();
        });

        it('enter password is shown by default', function() {
            expect(scope.showEnter).toEqual(true);
            expect(scope.showForgot).toEqual(false);
        });

        it('switch between enter password and show password', function() {
            scope.changeState();
            expect(scope.showEnter).toEqual(false);
            expect(scope.showForgot).toEqual(true);
        });

        it('test invalid passwords', function() {
            expect(utils.validatePassword('password')).toEqual(false);
            expect(utils.validatePassword('pass')).toEqual(false);
            expect(utils.validatePassword('P5ss')).toEqual(false);
            expect(utils.validatePassword('Password')).toEqual(false);
            expect(utils.validatePassword('password1')).toEqual(false);
            expect(utils.validatePassword('Password1asswordpasswordpasswordPasss')).toEqual(false);
        });

        it('test valid passwords', function() {
            expect(utils.validatePassword('Password1')).toEqual(true);
            expect(utils.validatePassword('pAssw0rd')).toEqual(true);
        });
    });
});