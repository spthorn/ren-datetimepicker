module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify : {
            target: {
                files: {
                    'build/ren-datetimepicker.min.js' : 'src/ren-datetimepicker.js'
                }
            },
            options: {
                mangle: true,
                compress: {
                    dead_code: false // jshint ignore:line
                },
                output: {
                    ascii_only: true // jshint ignore:line
                },
                report: 'min',
                preserveComments: 'some'
            }
        },

        jshint: {
            all: [
                'Gruntfile.js', 'src/*.js'
            ],
            options: {
                'browser'  : true,
                'node'     : true,
                'jquery'   : true,
                'boss'     : false,
                'curly'    : true,
                'debug'    : false,
                'devel'    : false,
                'eqeqeq'   : true,
                'bitwise'  : true,
                'eqnull'   : true,
                'evil'     : false,
                'forin'    : true,
                'immed'    : false,
                'laxbreak' : false,
                'newcap'   : true,
                'noarg'    : true,
                'noempty'  : false,
                'nonew'    : false,
                'onevar'   : true,
                'plusplus' : false,
                'regexp'   : false,
                'undef'    : true,
                'sub'      : true,
                'strict'   : true,
                'unused'   : true,
                'white'    : true,
                'es3'      : true,
                'camelcase' : true,
                'quotmark' : 'single',
                'globals': {
                    'define': false,
                    'moment': false
                }
            }
        },

        jscs: {
            all: [
                'Gruntfile.js', 'src/*.js'
            ],
            options: {
                config: '.jscs.json'
            }
        },

        less: {
            production: {
                options: {
                    cleancss: true
                },
                files: {
                    'build/ren-datetimepicker.min.css': 'src/ren-datetimepicker-build.less'
                }
            },
            development: {
                files: {
                    'build/ren-datetimepicker.css': 'src/ren-datetimepicker-build.less'
                }
            }
        }

    });

    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt);

    // Default task.
    grunt.registerTask('default', ['jshint', 'jscs']);

    // travis build task
    grunt.registerTask('build:travis', [
        // code style
        'jshint', 'jscs', 'uglify', 'less'
    ]);

    // Task to be run when building
    grunt.registerTask('build', [
        'jshint', 'jscs', 'uglify', 'less'
    ]);
};
