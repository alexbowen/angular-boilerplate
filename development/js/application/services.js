define(['angular', 'app/services/auth', 'app/services/version'],
function (angular) {
	'use strict';
	
    /* Services */

<<<<<<< HEAD
    return angular.module('services', ['AuthService', 'VersionService'])
        .value('version', '0.1')
=======
    return angular.module('services', ['AuthService'])
        .value('version', '0.1');
>>>>>>> master

});
