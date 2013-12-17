// we get all the test files automatically
var tests = [];

for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/Spec\.js$/i.test(file)) {
			tests.push(file);
		}
	}
}

require.config({
	paths: {
        app             : 'application',
        jquery          : 'lib/jquery/jquery',
		angular         : '/base/development/js/lib/bower_components/angular/angular',
		angularRoute    : '/base/development/js/lib/bower_components/angular-route/angular-route',
		angularMocks    : '/base/development/js/lib/bower_components/angular-mocks/angular-mocks',
		text            : '/base/development/js/lib/bower_components/requirejs-text/text',
		fixtures        : '/base/tests/unit/fixtures',
		env             : '/base/development/js/config/development',
        config          : '/base/development/js/config/application',
        mocks            : '/base/development/js/mocks/http'

	},
	baseUrl: '/base/development/js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
	},
	deps: tests,
	callback: window.__karma__.start
});
