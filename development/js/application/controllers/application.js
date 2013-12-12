define(['angular', 'utils/cookie'],
function (angular, cookie) {
	return ['$scope', '$rootScope', function($scope, $rootScope) {

        cookie.remove('TA-authToken');  //TEMP

        $scope.text = 'Hello World!';

        $rootScope.$on('event:auth-loginConfirmed', function () {
            $rootScope.authenticated = true;
        });

        $rootScope.$on('event:auth-loginRefused', function (event, data) {
            $rootScope.authenticated = false;
        });

        $scope.$apply();
	}];
});
