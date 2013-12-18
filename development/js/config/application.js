define(['angular'],
    function (angular) {
    'use strict';

    return angular.module('APPLICATION', [])
        .constant('APPLICATION', {
            name: 'Deer Hunter',
            modules : {
                login: false,
                menu: false
            }
        })
});