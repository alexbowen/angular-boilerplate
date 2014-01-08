define(['angular'],
    function (angular) {
    'use strict';

    return angular.module('APPLICATION', [])
        .constant('APPLICATION', {
            name: 'Angular Boilerplate',
            modules : {
                login: false,
                menu: false
            }
        })
});