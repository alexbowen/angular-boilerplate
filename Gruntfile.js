module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                logo: "http://adminflare.local/images/af-logo.png",
                options: {
                    "linkNatives": "true",
                    "attributesEmit": "true",
                    "paths": [
                        "./development/js/application"
                    ],
                    "outdir": "./documentation"
                }
            }
        },
        jshint: {
            options : {
                'smarttabs'   : true,
                'forin'       : true, 
                'eqeqeq'      : true, 
                'bitwise'     : true, 
                'curly'       : true,
                'browser'     : true,
                'globals'     : {
                    '$'       : false,
                    'console' : false,
                    'jQuery'  : false
                }
            },
            beforeconcat: ['development/js/application/**/*.js'],
            afterconcat: ['production/js/application/**/*.js']
        },
        requirejs: {
            js: {
                options : {
                    baseUrl: "development/js",
                    dir: "production/js",
                    preserveLicenseComments: false,
                    paths: {
                        app             : 'application',
                        jquery 			: 'lib/jquery/jquery',
                        angular			: 'lib/angular/angular',
                        angularRoute 	: 'lib/angular/angular-route',
                        angularMocks    : 'lib/angular-mocks/angular-mocks',
                        text            : 'lib/requirejs-text/text'

                    },
                    modules: [
                        {
                            name: 'packages/main'
                        },
                        {
                            name: 'packages/users',
                            exclude: ['packages/main']
                        }
                    ]
                }
            },
            css: {
                options: {
                    cssIn: "./development/css/site.css",
                    out: "./production/css/site.css",
                    optimizeCss: "default"
                }
            }
        },
        copy : {
            main : {
                files : [
                    {src : './development/images', dest : './production'},
                    {src : './development/fonts', dest : './production'}
                ]
            }
        },
        karma    : {
            ci  : { // runs tests one time in PhantomJS, good for continuous integration
                autoWatch: false,
                configFile: 'config/karma.conf.js',
                browsers  : ['PhantomJS']
            },
            unit: { // start testing server that listens for code updates
                autoWatch: false,
                configFile: 'config/karma.conf.js',
                singleRun : true,
                browsers  : ['Chrome']
            },
            watch: { // used in grunt watch context
                background: true,
                configFile: 'config/karma.conf.js',
                singleRun: false,
                browsers  : ['Chrome']
            },
            e2e : {
                autoWatch: false,
                configFile: 'config/karma-e2e.conf.js',
                singleRun : true,
                browsers  : ['Chrome']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-yuidoc');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-karma');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['yuidoc', 'jshint', 'karma:e2e', 'karma:unit', 'requirejs:css', 'requirejs:js', 'copy:main']);

    grunt.registerTask('test', ['karma:e2e', 'karma:unit']);

    grunt.registerTask('css', ['requirejs:css']);

    grunt.registerTask('js', ['requirejs:js']);
};
