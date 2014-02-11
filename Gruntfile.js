module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        application : grunt.option('application') || grunt.file.readJSON('package.json').name,
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                logo: "",
                options: {
                    "linkNatives": "true",
                    "attributesEmit": "true",
                    "paths": [
                        "./<%= application %>/development/js/application"
                    ],
                    "outdir": "./<%= application %>/documentation"
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
                'expr'       : true,
                'globals'     : {
                    '$'       : false,
                    'console' : false,
                    'jQuery'  : false
                }
            },
            beforeconcat: ['./<%= application %>/development/js/application/**/*.js']
        },
        requirejs: {
            js: {
                options : {
                    baseUrl: "./<%= application %>/development/js",
                    dir: "./<%= application %>/production/js",
                    preserveLicenseComments: false,
                    fileExclusionRegExp: /^(.*)\.min\.js$/,
                    urlArgs: "bust=" +  (new Date()).getTime(),
                    paths: {
                        app             : 'application',
                        jquery          : 'lib/jquery/jquery',
                        angular         : 'lib/bower_components/angular/angular',
                        angularRoute    : 'lib/bower_components/angular-route/angular-route',
                        angularMocks    : 'lib/bower_components/angular-mocks/angular-mocks',
                        text            : 'lib/bower_components/requirejs-text/text',
                        modernizr       : 'lib/modernizr/modernizr-dev',
                        env             : 'config/' + grunt.option('config'),
                        config          : 'config/application',
                        mocks           : 'mocks/http'
                    },
                    modules: [
                        {
                            name: 'packages/main',
                            exclude: [
                                'packages/bootstrap'
                            ]
                        },
                        {
                            name: 'packages/bootstrap',
                            exclude: [
                                'packages/main'
                            ]
                        }
                    ]
                }
            },
            css: {
                options: {
                    cssIn: "./<%= application %>/development/css/site.css",
                    out: "./<%= application %>/production/css/site.css",
                    optimizeCss: "default"
                }
            }
        },
        karma    : {
            unit: {
                autoWatch: false,
                configFile: './<%= application %>/config/karma.conf.js',
                singleRun : true,
                browsers  : ['Chrome']
            },
            watch: { // used in grunt watch context
                background: true,
                configFile: './<%= application %>/config/karma.conf.js',
                singleRun: false,
                browsers  : ['Chrome']
            }
        },
        protractor: {
            options: {
                configFile: "<%= application %>/config/protractor.conf.js",
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            your_target: {
                options: {
                    configFile: "<%= application %>/config/protractor.conf.js", // Target-specific config file
                    args: {} // Target-specific arguments
                }
            }
        },
        modernizr: {

            "devFile" : "./<%= application %>/development/js/lib/modernizr/modernizr-dev.js",

            "outputFile" : "./<%= application %>/production/js/lib/modernizr/modernizr-custom.js",

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

    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.loadNpmTasks("grunt-modernizr");

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['jshint', 'karma:unit', 'yuidoc', 'modernizr', 'requirejs:css', 'requirejs:js']);

    grunt.registerTask('build', ['yuidoc', 'modernizr', 'requirejs:css', 'requirejs:js']);

    grunt.registerTask('test', ['jshint', 'karma:unit']);

    grunt.registerTask('js', ['jshint', 'requirejs:js']);

    grunt.registerTask('css', ['requirejs:css']);
};