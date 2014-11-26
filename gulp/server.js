;(function() {
    'use strict';

    var gulp = require('gulp');
    var browserSync = require('browser-sync');

    gulp.task('serve', ['watch'], function() {
        browserSync({
            files: [
                '**/*.html',
                '**/*.css',
                '**/*.js'
            ],
            server: {
                baseDir: './'
            },
            browser: ['google chrome']
        });
    });

}());