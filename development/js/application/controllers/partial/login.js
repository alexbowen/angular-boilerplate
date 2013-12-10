define(['angular', 'utils/cookie'],
function (angular, cookie) {
    return ['$scope', '$rootScope', '$http', '$compile', 'AuthServiceProvider', function($scope, $rootScope, $http, $compile, AuthServiceProvider) {

    	$scope.authenticate = function () {
	        AuthServiceProvider
	        	.authenticate({'user' : $scope.user.name, 'pass' : $scope.user.pass})
	        	.success(function(response, httpCode) {
                    if (response.authToken) {

                        cookie.remove('TA-authToken');

                        if ($scope.user.remember) {
                            cookie.set('TA-authToken', response.authToken, {
                                'maxAge' : 6000
                            });
                        }

                        $rootScope.$broadcast('event:auth-loginConfirmed', response);
                    }

                    if (httpCode === '401') {
                        $rootScope.$broadcast('event:auth-loginRefused', response);
                    }
                })
                .error(function () {
                    $rootScope.$broadcast('event:auth-loginError');
                });
	    }

        $scope.$apply();
    }];
});