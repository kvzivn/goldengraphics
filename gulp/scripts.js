;(function() {
    'use strict';

    var gulp = require('gulp');

    var $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'main-bower-files']
    });


    gulp.task('scripts', function() {
        return gulp.src([
                'javascript/**/*.js'
            ])
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish'))
            .pipe($.size());
    });

}());
