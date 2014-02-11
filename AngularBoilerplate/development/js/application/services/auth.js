define(['angular'], function (angular) {

    'use strict';

    return angular.module('AuthService', [])
        .provider('AuthServiceProvider', function () {

            this.$get = ['$rootScope','$injector', function($rootScope, $injector) {

                var $http = $injector.get('$http');

                return {
                    authenticate : function (credentials) {
                        return $http.post('/login/authenticate', JSON.stringify(credentials));
                    },
                    resetRequest : function (credentials) {
                        return $http.post('/login/requestpasswordreset', JSON.stringify(credentials));
                    },
                    resetAction : function (credentials) {
                        return $http.post('/login/actionpasswordreset', JSON.stringify(credentials));
                    }
                };
            }];
        });
});