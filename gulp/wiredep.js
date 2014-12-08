(function() {
    'use strict';

    var gulp = require('gulp');

    // inject bower components
    gulp.task('wiredep', function wiredep() {
        var wiredep = require('wiredep').stream;

        gulp.src(['index.html'])
            .pipe(wiredep({
                cwd: '.',
                directory: 'bower_components',
                devDependencies: true,
                exclude: []
            }))
            .pipe(gulp.dest(''));
    });
}());
