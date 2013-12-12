module.exports = function(config) {

	config.set({
		basePath: '../',
		frameworks: ['jasmine', 'requirejs'],
		files: [
			{pattern: 'development/js/*.js', included: false},
			{pattern: 'development/js/**/*.js', included: false},
			{pattern: 'tests/unit.js', included: true},
			{pattern: 'tests/unit/*.js', included: false},
			{pattern: 'tests/unit/**/*.js', included: false},
			{pattern: 'development/js/lib/bower_components/**/*.js', included: false},
			// needs to be last http://karma-runner.github.io/0.10/plus/requirejs.html
			'tests/main-test.js'
	],

	autoWatch: true,

	LogLevel: config.LOG_DEBUG,

	browsers: ['Chrome'],

	junitReporter: {
		outputFile: 'test_out/unit.xml',
		suite: 'unit'
	}
	});
};
