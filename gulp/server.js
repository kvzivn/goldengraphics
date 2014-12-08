;(function() {
    'use strict';

    var gulp = require('gulp');
    var browserSync = require('browser-sync');

    gulp.task('serve', ['watch'], function() {
        browserSync({
            server: {
                baseDir: './'
            },
            files: [
                'index.html',
                'javascript/**/*.html',
                'styleheets/**/*.css',
                'javascript/**/*.js'
            ],
            browser: ['google chrome']
        });
    });

}());