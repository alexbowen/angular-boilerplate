define(['angular'],
    function (angular) {
    'use strict';

    return angular.module('MODULES', [])
        .constant('MODULES', {
            login: false,
            menu: false
        })
});