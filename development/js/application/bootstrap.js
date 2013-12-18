define(['angular', 'angularRoute'], function (angular) {
    'use strict';

    var Application =  angular.module('application', [
        'ngRoute',
        'controllers',
        'services',
		'filters',
		'directives'
    ])
    .config(['$routeProvider', '$injector', function ($routeProvider, $injector) {

        $routeProvider
            .when('/:page', {
                templateUrl : function (params) { return 'js/application/view/page/' + params.page + '.tpl'; },
                controller  : 'RouteController'
            })
            .when('/', {
                templateUrl : 'js/application/view/page/home.tpl',
                controller  : 'RouteController'
            })
            .otherwise({
                redirectTo  : '/'
            });
    }])
    .run(['$rootScope', '$http', function ($rootScope, $http) {
        // Load pages on startup

        $http.get('js/application/pages.json').success(function (data) {
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





			

