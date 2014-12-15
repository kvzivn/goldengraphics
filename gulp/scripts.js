;(function gulpScripts() {
    'use strict';

    var gulp = require('gulp'),

        $ = require('gulp-load-plugins')({
            pattern: ['gulp-*', 'main-bower-files']
        });


    gulp.task('scripts', ['jshint', 'jscs'], function scripts() {
        return gulp.src([
                'javascript/**/*.js'
            ])
            .pipe($.size());
    });


    gulp.task('lint', ['jshint', 'jscs'], function lint() {
        return gulp.src('javascript/**/*.js')
            .pipe($.size());
    });


    gulp.task('jshint', function jshint() {
        return gulp.src([
                'javascript/**/*.js'
            ])
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish'))
            .pipe($.jshint.reporter('fail'))
            .on('error', $.notify.onError(function onError(error) {
                return error.message;
            }));
    });

    gulp.task('jscs', function jscs() {
        return gulp.src([
                'javascript/**/*.js'
            ])
            .pipe($.jscs())
            .on('error', $.notify.onError(function onError(error) {
                return error.message;
            }));
    });

}());

