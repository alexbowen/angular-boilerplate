/*
jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true,
undef:true, unused:true, curly:true, browser:true, indent:4, maxerr:50, smarttabs:true
*/
define(['utils/cookie'],
function (cookie) {

    return ['$scope', 'AuthServiceProvider', '$rootScope', function($scope, AuthServiceProvider, $rootScope) {

        $scope.showEnter = true;
        $scope.showForgot = false;

        $scope.authenticate = function () {

           if ($scope.validatePassword($scope.user.pass)) {

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
                        } else {
                            $scope.showLogin = true;
                            $scope.error = response.StatusMessage;
                        }

                        if (response.StatusCode === 403) {
                            $rootScope.$broadcast('event:auth-loginRefused', response);
                        }
                    })
                    .error(function () {
                        $scope.error = 'Request error';
                    });
            } else {
                $scope.error = 'Invalid password';
            }
        };

        $scope.validatePassword = function (password) {

            var pattern = /^(?=.*\d)(?=.*[A-Z]).{8,32}$/;

            if (pattern.test(password)) {
                if (password.length >= 8 && password.length <= 32) {
                    return true;
                }
            }

            return false;
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

        $scope.resetAction = function () {
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
            $scope.showEnter = $scope.showEnter ? false : true;
            $scope.showForgot = $scope.showForgot ? false : true;
        };

        if (!$rootScope.authenticated && !cookie.get('TA-authToken')) {
            $scope.showLogin = true;
        }

        $scope.$apply();
    }];
});