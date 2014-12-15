;(function gulpStyles() {
    'use strict';

    var gulp = require('gulp'),
        $ = require('gulp-load-plugins')({
            pattern: ['gulp-*', 'main-bower-files']
        });


    gulp.task('styles', ['scss-lint'], function styles() {
        return gulp.src('stylesheets/styles.scss')
            .pipe($.rubySass())
            .pipe($.autoprefixer('last 2 version'))
            .pipe(gulp.dest('stylesheets'))
            .pipe($.size());
    });

    gulp.task('scss-lint', function scssLint() {
        gulp.src('stylesheets/**/*.scss')
            .pipe($.cached('scsslint'))
            .pipe($.scssLint({
                customReport: myCustomReporter
            }))
            .on('error', $.notify.onError(function onError(error) {
                return error.message;
            }));
    });

    function myCustomReporter(file) {
        // Will report all issues, including warnings
        if ( 0 < file.scsslint.issues.length  ) {
            $.util.beep();
            $.notify().write({
                message: file.scsslint.issues.length + ' error found in ' + file.path
            });
        }

    }


}());
