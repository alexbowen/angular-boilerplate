define(['angular'],
function (angular) {
    return ['$scope', '$rootScope', '$routeParams', function($scope) {
        //$scope.template = {'name' : 'login', 'url' : 'development/js/application/view/partial/login.tpl'}

        $scope.user = {};
        // handle listen to login required event
        $scope.$on('event:auth-loginRequired', function() {
            $scope.showLogin = true;
            console.log('auth-loginRequired');
        });
        // handle listen to login confirmed event
        $scope.$on('event:auth-loginConfirmed', function() {
            $scope.user = {};
            $scope.showLogin = false;
            $scope.loginError = false;
            $rootScope.loggedIn = true;
            console.log('auth-loginConfirmed');
        });

        // login to server
        $scope.login = function(user) {
            user._csrf = $window.csrf;
            $http.post('/api/sessions', user)
                .success(function(data) {
                    // show alert login success
                    $scope.addAlert({type: 'success', msg: 'Login Successful!'});
                    authService.loginConfirmed();
                })
                .error(function(err) {
                    // show error
                    $scope.loginError = true;
                    //$scope.addAlert({type: 'error', msg: 'Access Denied!'})
                });
        };
        $scope.closeLogin = function() {
            $scope.user = {};
            $location.path('/');
            $scope.showLogin = false;
        };

        $scope.$apply();
    }];
});