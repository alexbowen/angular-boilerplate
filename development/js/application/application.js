define([
    'angular',
    'app/auth',
    'app/controllers',
    'angularRoute',
    'app/filters',
    'app/services',
    'app/directives'
], function (angular, auth, controllers) {
    'use strict';

    console.log('deps loaded', arguments);

    return angular.module('transformAdmin', [
        'ngRoute',
        'http-auth-interceptor',
        'controllers',
		'filters',
		'services',
		'directives'
    ], function ($routeProvider) {
        $routeProvider
            .when('/:page', {
                templateUrl : function(params){ return 'development/js/application/view/page/' + params.page + '.tpl'; },
                controller  : 'RouteController'
            })
            .when('/', {
                templateUrl : 'development/js/application/view/page/home.tpl',
                controller  : 'RouteController'
            })
            .otherwise({
                redirectTo  : '/'
            });
    })
    .run(['$rootScope', 'authService', '$http', '$location', function(scope, authService, $http, $location) {

        // check if logged in
        $http.get('/login/authenticate')
            .success(function() {
                scope.loggedIn = true;
            });

        // show login dialog
        scope.showLoginDlg = function() {
            scope.$broadcast('event:auth-loginRequired');
        };
        // logout
        scope.logout = function() {
            $http.post('/api/logout').success(function(data) {
                scope.loggedIn = false;
                $location.path('/');
            });
        };
        // initialize alerts
        scope.alerts = [];

        // add alert msg
        scope.addAlert = function(alert) {
            scope.alerts.push(alert);
            setTimeout(function() {
                scope.$apply(function(){ scope.closeAlert(0);
                });
            }, 2000);
        };

        // remove alert msg
        scope.closeAlert = function(index) {
            scope.alerts.splice(index, 1);
        };
    }]);
});



			

