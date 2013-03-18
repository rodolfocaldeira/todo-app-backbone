/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
            pkg     : '<json:package.json>',
            lint    : {
                files : ['grunt.js', 'public/js/app/**/*.js']
            },
            watch   : {
                files : ['public//sass/*.scss', '<config:lint.files>'],
                tasks : ['compass', 'lint']
            },
            jshint  : {
                options : {
                    curly   : true,
                    eqeqeq  : true,
                    immed   : true,
                    latedef : true,
                    newcap  : true,
                    noarg   : true,
                    sub     : true,
                    undef   : true,
                    boss    : true,
                    eqnull  : true,
                    browser : true
                },

                globals : {
                    define: false,
                    require: false
                }
            },
            compass : {
                dev : {
                    src            : 'public/sass/',
                    dest           : 'public/css/',
                    linecomments   : false,
                    forcecompile   : true,
                    debugsass      : false,
                    images         : '/public/img/',
                    relativeassets : true
                }
            }
        }
    );

    // Loading Sass plugin
    grunt.loadNpmTasks('grunt-compass');

    // Default task.
    grunt.registerTask('default', 'compass lint');

};
