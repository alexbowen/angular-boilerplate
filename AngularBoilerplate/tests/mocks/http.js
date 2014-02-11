define(['angular', 'angularMocks'],
    function (angular) {
        'use strict';

    var http = angular.module('http', ['ngMockE2E'])

        .run(function($httpBackend) {

            $httpBackend.whenGET('pages.json').passThrough();
            $httpBackend.whenGET(/.*\.tpl/).passThrough();

            //Login:Authenticate
            $httpBackend.whenPOST(/\/login\/authenticate\.*/).respond({
                "StatusCode":200,
                "StatusMessage":"you are logged in",
                'authToken' : '29277243-a184-4fe6-a815-211600dfe146'
            });

            $httpBackend.whenPOST('/login/authenticate?pass=wrong&user=alex').respond({
                "StatusCode":403,
                "StatusMessage":"authorisation failed"
            });

            $httpBackend.whenGET('/login/authenticate?pass=right&user=alex').respond({
                "StatusCode":401,
                "StatusMessage":"bad request (GET)"
            });

            //Login:RequestPasswordReset
            $httpBackend.whenPOST('/login/requestpasswordreset?user=alex').respond({
                "StatusCode":200,
                "StatusMessage":"email sent"
            });

            $httpBackend.whenPOST('/login/requestpasswordreset?user=alexb').respond({
                "StatusCode":501,
                "StatusMessage":"request failed"
            });

            //Login:ActionPasswordReset
            $httpBackend.whenPOST('/login/actionpasswordreset?password=new&resetToken=29277243-a184-4fe6-a815-211600dfe146').respond({
                "StatusCode":200,
                "StatusMessage":"success"
            });

            $httpBackend.whenGET('/login/actionpasswordreset?password=new&resetToken=29277243-a184-4fe6-a815-211600dfe146').respond({
                "StatusCode":400,
                "StatusMessage":"bad request (GET)"
            });

            $httpBackend.whenPOST('/login/actionpasswordreset?password=123&resetToken=29277243-a184-4fe6-a815-211600dfe146').respond({
                "StatusCode":502,
                "StatusMessage":"invalid password"
            });

            $httpBackend.whenPOST('/login/actionpasswordreset?user=alexb').respond({
                "StatusCode":501,
                "StatusMessage":"request failed"
            });
        });

    return http;
});