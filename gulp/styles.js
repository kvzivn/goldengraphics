;(function gulpStyles() {
    'use strict';

    var gulp = require('gulp'),
        $ = require('gulp-load-plugins')({
            pattern: ['gulp-*', 'main-bower-files']
        });


    gulp.task('styles', function styles() {
        return gulp.src('stylesheets/styles.scss')
            .pipe($.rubySass())
            .pipe($.autoprefixer('last 2 version'))
            .pipe(gulp.dest('stylesheets'))
            .pipe($.size());
    });

}());
