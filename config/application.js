define(['angular'],
    function (angular) {
    'use strict';

    return angular.module('MODULES', [])
        .constant('MODULES', {
            auth: true,
            menu: true
        })
});