define(['angular', 'utils/cookie'],
function (angular, cookie) {
    return ['$scope', '$rootScope', '$http', '$compile', 'AuthServiceProvider', function($scope, $rootScope, $http, $compile, AuthServiceProvider) {

        $scope.senter = true;
        $scope.sforgot = false;

    	$scope.authenticate = function () {
	        AuthServiceProvider
	        	.authenticate({'user' : $scope.user.name, 'pass' : $scope.user.pass})
	        	.success(function(response) {
                    console.log('response', response);
                    if (response.authToken && response.StatusCode === 200) {

                        cookie.remove('TA-authToken');

                        if ($scope.user.remember) {
                            cookie.set('TA-authToken', response.authToken, {
                                'maxAge' : 6000
                            });
                        }

                        $rootScope.$broadcast('event:auth-loginConfirmed', response);

                        $scope.showLogin = false;
                    }

                    if (response.StatusCode === 403) {
                        $rootScope.$broadcast('event:auth-loginRefused', response);
                    }

                    $scope.error = response.StatusMessage;
                })
                .error(function () {
                    $scope.error = 'Request error';
                });
	    };

        $scope.resetRequest = function () {
            AuthServiceProvider
                .resetRequest({'user' : $scope.user.name})
                .success(function(response, httpCode) {
                    if (httpCode === 200) {
                        $scope.showLogin = false;
                    }

                    $scope.error = response.StatusMessage;
                })
                .error(function () {
                    $scope.error = 'Request error';
                });
        };

        $scope.resetRequest = function () {
            AuthServiceProvider
                .resetAction({'user' : $scope.user.name})
                .success(function(response, httpCode) {
                    if (httpCode === '200') {
                        $scope.showLogin = false;
                    }

                    if (httpCode === '400') {
                        //requestFailed
                    }

                    if (httpCode === '501') {
                        //invalidPassword
                    }

                    if (httpCode === '502') {
                        //requestFailed
                    }

                    $scope.error = response.StatusMessage;
                })
                .error(function () {
                    $scope.error = 'Request error';
                });
        };

        $scope.changeState = function () {
            $scope.senter = $scope.senter ? false : true;
            $scope.sforgot = $scope.sforgot ? false : true;
        };

        if (!$rootScope.authenticated && !cookie.get('TA-authToken')) {
            $scope.showLogin = true;
        }

        $scope.$apply();
    }];
});