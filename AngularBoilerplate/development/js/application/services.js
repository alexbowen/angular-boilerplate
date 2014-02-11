define(['angular', 'app/services/auth', 'app/services/version', 'mocks'],
function (angular) {
	'use strict';
	
    /* Services */

    return angular.module('services', ['AuthService', 'VersionService', 'Mock', 'ENVIRONMENT'])
        .value('version', '0.1');

});
