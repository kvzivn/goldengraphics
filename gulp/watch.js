/**
 * # WATCH GULP TASK
 * Watches files and/or folders for changes and runs a set of tasks on it.
 */

;(function() {
    'use strict';

    var gulp = require('gulp');
    var browserSync = require('browser-sync');

    gulp.task('watch', ['styles'] ,function () {
      gulp.watch('stylesheets/**/*.scss', ['styles']);
      gulp.watch('javascript/**/*.js', ['scripts', browserSync.reload]);
    });

}());