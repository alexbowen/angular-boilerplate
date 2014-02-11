define(['utils/cookie'],
function (cookie) {

	return ['$scope', '$rootScope', 'APPLICATION', function($scope, $rootScope, APPLICATION) {

        for (var m in APPLICATION.modules) {
            if (APPLICATION.modules.hasOwnProperty(m)) {
                $scope[m + 'active'] = APPLICATION.modules[m];
            }
        }

        //cookie.remove('TA-authToken');  //TEMP
        $rootScope.title = APPLICATION.name;

        $rootScope.$on('event:auth-loginConfirmed', function () {
            $rootScope.authenticated = true;
        });

        $rootScope.$on('event:auth-loginRefused', function (event, data) {
            $rootScope.authenticated = false;
        });

        $scope.$apply();
	}];
});
