define(['angular'],
    function (angular) {
    'use strict';

    return angular.module('APPLICATION', [])
        .constant('APPLICATION', {
            name: 'Application Version Control',
            modules : {
                login: false,
                menu: true
            }
        })
});