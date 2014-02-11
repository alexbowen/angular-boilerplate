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
    }])
    .service('Services', ['$httpBackend', function ($httpBackend) {

        return {
            disable : function () {
                $httpBackend.whenGET(/.*/).passThrough();
                $httpBackend.whenPUT(/.*/).passThrough();
            },
            run : function () {
                $httpBackend.whenGET(/.*\.json/).passThrough();
                $httpBackend.whenGET(/.*\.tpl/).passThrough();

                $httpBackend.whenGET('/deerhunter/api/systems').respond({
                    "systems": [
                        {
                            "Id": "52b0506fcee2d41d090000bb",
                            "name": "Application 1",
                            "rag": "RED",
                            "comment": "This App is down.",
                            "message": "Its all gone pete tong",
                            "datecreated": "2014-01-04T14:11:47.167Z"
                        },
                        {
                            "Id": "42b050c8fe59a811330000cc",
                            "name": "Application 2",
                            "rag": "AMBER",
                            "comment": "Reports are flakey.",
                            "message": "Its all gone pete tong",
                            "datecreated": "2014-01-05T14:11:47.167Z"
                        },
                        {
                            "Id": "32b050c8fe59a811330000cc",
                            "name": "Application 3",
                            "rag": "GREEN",
                            "comment": "All reports are ok.",
                            "message": "Its all gone pete tong",
                            "datecreated": "2014-01-01T14:11:47.167Z"
                        },
                        {
                            "Id": "22b0506fcee2d41d090000bb",
                            "name": "Application 4",
                            "rag": "RED",
                            "comment": "This App is down.",
                            "message": "Its all gone pete tong",
                            "datecreated": "2014-01-03T14:11:47.167Z"
                        },
                        {
                            "Id": "12b050c8fe59a811330000cc",
                            "name": "Application 5",
                            "rag": "AMBER",
                            "comment": "Reports are flakey.",
                            "message": "Its all gone pete tong",
                            "datecreated": "2014-01-02T14:11:47.167Z"
                        },
                        {
                            "Id": "53b050c8fe59a811330000cc",
                            "name": "Application 6",
                            "rag": "GREEN",
                            "comment": "All reports are ok.",
                            "message": "Its all gone pete tong",
                            "datecreated": "2014-01-03T14:11:47.167Z"
                        }
                    ]
                });
            }
        }
    }]);
});