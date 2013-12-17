define(['angular'],
    function (angular) {
        'use strict';

    return angular.module('ENVIRONMENT', [])
        .constant('ENVIRONMENT', {
            name: 'development',
            mock: {
                http:true
            }
        });
});