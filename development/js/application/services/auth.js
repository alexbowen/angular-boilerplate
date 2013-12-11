define(['angular'], function (angular) {

    'use strict';

    return angular.module('AuthService', [])
        .provider('AuthServiceProvider', function () {

            this.$get = ['$rootScope','$injector', function($rootScope, $injector) {

                var $http = $injector.get('$http');

                return {
                    authenticate : function (credentials) {
                        return $http({
                            'url'     : '/login/authenticate',
                            'method'  : 'POST',
                            'params'  : credentials
                        });
                    },
                    resetRequest : function (credentials) {
                        return $http({
                            'url'     : '/login/requestpasswordreset',
                            'method'  : 'POST',
                            'params'  : credentials
                        });
                    },
                    resetAction : function (credentials) {
                        return $http({
                            'url'     : '/login/actionpasswordreset',
                            'method'  : 'POST',
                            'params'  : credentials
                        });
                    }
                }
            }]
        });
});