;(function() {
    'use strict';

    var gulp = require('gulp');
    var browserSync = require('browser-sync');

    var $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'main-bower-files']
    });


    gulp.task('build', function() {
        gulp.start('html');
    });


    gulp.task('styles', function() {
        return gulp.src('stylesheets/styles.scss')
            .pipe($.rubySass())
            .pipe($.autoprefixer('last 2 version'))
            .pipe(gulp.dest('stylesheets'))
            .pipe($.size());
    });

}());