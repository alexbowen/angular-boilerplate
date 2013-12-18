define(['utils/cookie'],
function (cookie) {

<<<<<<< HEAD
        //cookie.remove('TA-authToken');  //TEMP
=======
	return ['$scope', '$rootScope', 'APPLICATION', function($scope, $rootScope, APPLICATION) {
>>>>>>> master

        for (var m in APPLICATION.modules) {
            if (APPLICATION.modules.hasOwnProperty(APPLICATION.modules[m])) {
                $scope[m + 'active'] = APPLICATION.modules[m];
            }
        }

        //cookie.remove('TA-authToken');  //TEMP
        $rootScope.title = APPLICATION.name;
        

        $scope.title = 'Deer Hunter';

        $rootScope.$on('event:auth-loginConfirmed', function () {
            $rootScope.authenticated = true;
        });

        $rootScope.$on('event:auth-loginRefused', function (event, data) {
            $rootScope.authenticated = false;
        });

        $scope.$apply();
	}];
});
