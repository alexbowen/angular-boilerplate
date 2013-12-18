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
            beforeconcat: ['development/js/application/**/*.js']
        },
        requirejs: {
            js: {
                options : {
                    baseUrl: "development/js",
                    dir: "production/js",
                    preserveLicenseComments: false,
                    fileExclusionRegExp: /^(.*)min\.js$/,
                    paths: {
                        app             : 'application',
                        jquery 			: 'lib/jquery/jquery',
                        angular         : 'lib/bower_components/angular/angular',
                        angularRoute    : 'lib/bower_components/angular-route/angular-route',
                        angularMocks    : 'lib/bower_components/angular-mocks/angular-mocks',
                        text            : 'lib/bower_components/requirejs-text/text',
                        text            : 'lib/requirejs-text/text',
                        env             : 'config/' + grunt.option('environment'),
                        config          : 'config/application',
                        mocks           : 'mocks/http'
                    },
                    modules: [
                        {
                            name: 'packages/main',
                            exclude: ['packages/angular']
                        },
                        {
                            name: 'packages/angular',
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
        karma    : {
            ci  : { // runs tests one time in PhantomJS, good for CI
                autoWatch: false,
                configFile: 'config/karma-e2e.conf.js',
                singleRun : true,
                browsers  : ['PhantomJS']
            },
            unit: {
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
        },
        modernizr: {

            "devFile" : "./development/js/lib/modernizr/modernizr-dev.js",

            "outputFile" : "./production/js/lib/modernizr/modernizr-custom.js",

            // Based on default settings on http://modernizr.com/download/
            "extra" : {
                "shiv" : true,
                "printshiv" : false,
                "load" : true,
                "mq" : false,
                "cssclasses" : true
            },

            // Based on default settings on http://modernizr.com/download/
            "extensibility" : {
                "addtest" : false,
                "prefixed" : false,
                "teststyles" : false,
                "testprops" : false,
                "testallprops" : false,
                "hasevents" : false,
                "prefixes" : false,
                "domprefixes" : false
            },

            "uglify" : true,

            "tests" : [],

            "parseFiles" : true,

            // When parseFiles = true, this task will crawl all *.js, *.css,
            // *.scss files, except files that are in node_modules/.
            // You can override this by defining a "files" array below.
            // "files" : [],

            "matchCommunityTests" : false,

            // custom Modernizr tests
            "customTests" : []
        }

    });

    grunt.loadNpmTasks('grunt-contrib-yuidoc');

    grunt.loadNpmTasks('grunt-karma');

    grunt.loadNpmTasks("grunt-modernizr");

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['jshint', 'karma:unit', 'yuidoc', 'modernizr', 'requirejs:css', 'requirejs:js']);

    grunt.registerTask('build', ['yuidoc', 'modernizr', 'requirejs:css', 'requirejs:js']);

    grunt.registerTask('test', ['jshint', 'karma:unit']);

    grunt.registerTask('e2e', ['jshint', 'karma:e2e']);

    grunt.registerTask('js', ['jshint', 'requirejs:js']);
};
