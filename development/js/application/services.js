define(['angular', 'app/services/auth', 'app/services/version'],
function (angular) {
	'use strict';
	
    /* Services */

    return angular.module('services', ['AuthService', 'VersionService'])
        .value('version', '0.1');

});
