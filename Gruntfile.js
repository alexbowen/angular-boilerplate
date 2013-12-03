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
                        jquery			: 'lib/jquery/jquery',
                        angular         : 'lib/bower_components/angular/angular',
                        angularRoute    : 'lib/bower_components/angular-route/angular-route',
                        angularMocks    : 'lib/bower_components/angular-mocks/angular-mocks',
                        text            : 'lib/bower_components/requirejs-text/text'

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
        },
        modernizr: {

            // [REQUIRED] Path to the build you're using for development.
            "devFile" : "./development/js/lib/modernizr/modernizr-dev.js",

            // [REQUIRED] Path to save out the built file.
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

            // By default, source is uglified before saving
            "uglify" : true,

            // Define any tests you want to implicitly include.
            "tests" : [],

            // By default, this task will crawl your project for references to Modernizr tests.
            // Set to false to disable.
            "parseFiles" : true,

            // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
            // You can override this by defining a "files" array below.
            // "files" : [],

            // When parseFiles = true, matchCommunityTests = true will attempt to
            // match user-contributed tests.
            "matchCommunityTests" : false,

            // Have custom Modernizr tests? Add paths to their location here.
            "customTests" : []
        }
    });

    grunt.loadNpmTasks('grunt-contrib-yuidoc');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-karma');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks("grunt-modernizr");

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['yuidoc', 'jshint', 'modernizr', 'karma:e2e', 'karma:unit', 'requirejs:css', 'requirejs:js', 'copy:main']);

    grunt.registerTask('test', ['karma:e2e', 'karma:unit']);

    grunt.registerTask('css', ['requirejs:css']);

    grunt.registerTask('js', ['requirejs:js']);

    grunt.registerTask('watch', ['karma:watch']);
};
