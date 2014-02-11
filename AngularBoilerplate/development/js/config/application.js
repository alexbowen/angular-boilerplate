define(['angular'],
    function (angular) {
    'use strict';

    return angular.module('APPLICATION', [])
        .constant('APPLICATION', {
            name: 'Angular Boilerplate',
            basePage: 'home',
            modules : {
                login: false,
                menu: true
            }
        })
});