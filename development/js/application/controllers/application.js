define(['angular', 'utils/cookie', 'config'],
function (angular, cookie) {
	return ['$scope', '$rootScope', 'MODULES', function($scope, $rootScope, MODULES) {

        for (var m in MODULES) {
            $scope[m + 'active'] = MODULES[m];
        }

        //cookie.remove('TA-authToken');  //TEMP

        $scope.text = 'test test';

        $rootScope.$on('event:auth-loginConfirmed', function () {
            $rootScope.authenticated = true;
        });

        $rootScope.$on('event:auth-loginRefused', function (event, data) {
            $rootScope.authenticated = false;
        });

        $scope.$apply();
	}];
});
