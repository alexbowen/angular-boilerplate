define(['angular', 'app/services/auth'],
function (angular) {
	'use strict';
	
    /* Services */

    return angular.module('services', ['AuthService'])
        .value('version', '0.1')

});
