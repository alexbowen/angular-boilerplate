define(['angular', 'angularRoute', 'mocks', 'config'], function (angular) {

    'use strict';

    var Application =  angular.module('application', [
            'ngRoute',
            'controllers',
            'services',
            'filters',
            'directives',
            'Mock',
            'APPLICATION'
        ])
        .config(['$routeProvider', 'APPLICATION', function ($routeProvider, APPLICATION) {

            $routeProvider
                .when('/:page', {
                    templateUrl : function (params) { return 'js/application/view/page/' + params.page + '.tpl'; },
                    controller  : 'RouteController'
                })
                .when('/', {
                    templateUrl : 'js/application/view/page/' + APPLICATION.basePage + '.tpl',
                    controller  : 'RouteController'
                })
                .otherwise({
                    redirectTo  : '/'
                });
        }])
        .run(['$rootScope', '$http', '$injector', 'ENVIRONMENT', function ($rootScope, $http, $injector, ENVIRONMENT) {

           if (ENVIRONMENT.mock.http) {
               console.log('using mocks');
               $injector.get('Auth').run();
               $injector.get('Services').run();
           } else {
                $injector.get('Auth').disable();
                $injector.get('Services').disable();
            }

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