define(['angular'], function (angular) {

    'use strict';

    return angular.module('VersionService', [])
        .provider('VersionServiceProvider', function () {

            this.$get = ['$rootScope','$injector', function($rootScope, $injector) {

                var $http = $injector.get('$http');

                return {
                    set : function () {
                        return $http.post('/appversion');
                    },
                    get : function (id) {
                        return $http.get('/appversion/' + id + '/');
                    }
                }
            }]
        });
});