module.exports = function (grunt) {
    grunt.registerTask('bump_version', function (version) {
        if (!version || version.split('.').length !== 3) {
            grunt.fail.fatal("malformed version. Use\n\n    grunt bump_version:1.2.3")
        }

        grunt.config('string-replace.ren-datetimepicker-js', {
            files: {'src/ren-datetimepicker.js': 'src/ren-datetimepicker.js'},
            options: {
                replacements: [
                    {
                        pattern:     /\/\/! version : .*/,
                        replacement: '//! version : ' + version
                    }
                ]
            }
        });

        grunt.config('string-replace.package-json', {
            files: {'package.json': 'package.json'},
            options: {
                replacements: [
                    {
                        pattern:     /"version": .*/,
                        replacement: '"version": "' + version + '",'
                    }
                ]
            }
        });

        grunt.task.run([
            'string-replace:ren-datetimepicker-js',
            'string-replace:package-json',
        ]);
    });
};
