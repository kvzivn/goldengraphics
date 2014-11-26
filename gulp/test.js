;(function() {
    'use strict';

    var gulp = require('gulp'),
        karma = require('karma').server;

    gulp.task('test', function(done) {
        karma.start({
            configFile: __dirname + '/test/karma-unit.conf.js',
            singleRun: false
        }, done);
    });

}());