require.config({
    paths: {
        app             : 'application',
        jquery			: 'lib/jquery/jquery',
        angular         : 'lib/bower_components/angular/angular',
        angularRoute    : 'lib/bower_components/angular-route/angular-route',
        angularMocks    : 'lib/bower_components/angular-mocks/angular-mocks',
        text            : 'lib/bower_components/requirejs-text/text'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        }
    },
    priority: [
        "angular"
    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([
    'jquery'
], function () {
    require( [
        'angular',
        'app/bootstrap',
        'packages/main'
    ], function(angular, app, routes) {
        'use strict';
        var $html = angular.element(document.getElementsByTagName('html')[0]);

        angular.element().ready(function() {
            angular.resumeBootstrap([app['name']]);
        });
    });
});