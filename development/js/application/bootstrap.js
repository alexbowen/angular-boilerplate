define([
    'angular',
    'app/controllers',
    'app/services',
    'env',
    'config',
    'app/filters',
    'app/directives',
    'angularRoute'
], function (angular, controllers, services) {
    'use strict';

    var Application =  angular.module('application', [
        'ngRoute',
        'ENVIRONMENT',
        'APPLICATION'
        'controllers',
        'services',
		'filters',
		'directives'
    ])
    .config(['$routeProvider', '$injector', 'ENVIRONMENT', 'APPLICATION', function ($routeProvider, $injector, ENVIRONMENT, APPLICATION) {
console.log(APPLICATION);
        $routeProvider
            .when('/:page', {
                templateUrl : function (params) { return ENVIRONMENT.name + '/js/application/view/page/' + params.page + '.tpl'; },
                controller  : 'RouteController'
            })
            .when('/', {
                templateUrl : ENVIRONMENT.name + '/js/application/view/page/home.tpl',
                controller  : 'RouteController'
            })
            .otherwise({
                redirectTo  : '/'
            });
    }])
    .run(['$rootScope', '$http', function ($rootScope, $http) {
        // Load pages on startup
        $http.get('pages.json').success(function (data) {
            $rootScope.pages = data;
        });

        // Set the page for menu active class
        $rootScope.$on('routeLoaded', function (event, args) {

            $rootScope.page = args.page;

            $rootScope.$apply();
        });
    }]);

    return Application;
});





			

