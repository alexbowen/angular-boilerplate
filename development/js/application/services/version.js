define(['angular'], function (angular) {

    'use strict';

    return angular.module('VersionService', [])
        .provider('VersionServiceProvider', function () {

            this.$get = ['$rootScope','$injector', function($rootScope, $injector) {

                var $http = $injector.get('$http');

                return {
                    set : function (params) {
                        return $http.post('/appversion', JSON.stringify(params));
                    },
                    get : function (params) {
                        return $http.get('/appversion/' + params.id + '/');
                    }
                };
            }];
        });
});