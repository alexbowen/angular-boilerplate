define(['angular', 'utils/cookie'],
function (angular, cookie) {
	return ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

        if (!$rootScope.authenticated && !cookie.get('TA-authToken')) {
            $rootScope.showLogin = true;
        }

        $rootScope.$on('event:auth-loginConfirmed', function () {
            $rootScope.showLogin = false;
            $rootScope.authenticated = true;
        });
	}];
});
