define(['angular', 'utils/application', 'angularMocks'],
function (angular, utils) {
    'use strict';

    angular.module('Mock', ['ngMockE2E'])
    .service('Auth', ['$httpBackend', function ($httpBackend) {

        return {
            disable : function () {
                $httpBackend.whenGET(/.*/).passThrough();
                $httpBackend.whenPOST(/.*/).passThrough();
            },
            run : function () {

                $httpBackend.whenGET(/.*\.json/).passThrough();
                $httpBackend.whenGET(/.*\.tpl/).passThrough();

                //Login:Authenticate
                $httpBackend.whenPOST(/\/login\/authenticate\.*/, function (data) {
                    var body = angular.fromJson(data);
                    return utils.validatePassword(body.pass);
                }).respond({
                    "StatusCode":200,
                    "StatusMessage":"you are logged in",
                    'authToken' : '29277243-a184-4fe6-a815-211600dfe146'
                });

                $httpBackend.whenPOST(/\/login\/authenticate\.*/, function (data) {
                    var body = angular.fromJson(data);
                    return !utils.validatePassword(body.pass);
                }).respond({
                    "StatusCode":403,
                    "StatusMessage":"authorisation failed"
                });

                $httpBackend.whenGET('/login/authenticate').respond({
                    "StatusCode":401,
                    "StatusMessage":"bad request (GET)"
                });
            }
        }
    }]);
});