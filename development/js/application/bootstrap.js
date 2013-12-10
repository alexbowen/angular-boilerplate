define([
    'angular',
    'app/controllers',
    'app/services',
    'angularMocks',
    'app/filters',
    'app/directives',
    'angularRoute'
], function (angular, controllers, services) {
    'use strict';

    var Application =  angular.module('application', [
        'ngRoute',
        'ngMockE2E',
        'controllers',
        'services',
		'filters',
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
    .run(['$rootScope', '$httpBackend', '$http', function ($rootScope, $httpBackend, $http) {

        // Load pages on startup
        $http.get('pages.json').success(function (data) {
            $rootScope.pages = data;
        });

        $rootScope.text = 'Hello World!';

          // Set the page for menu active class
        $rootScope.$on('routeLoaded', function (event, args) {

            $rootScope.page = args.page;

            $rootScope.$apply();
        });

        $httpBackend.whenGET('pages.json').passThrough();
        $httpBackend.whenGET(/.*\.tpl/).passThrough();

        $httpBackend.whenPOST('/login/authenticate?pass=test&user=alex').respond({
            'authToken' : '29277243-a184-4fe6-a815-211600dfe146'
        });
    }]);

    return Application;
});





			

