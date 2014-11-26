// Karma configuration
// Generated on Tue Sep 30 2014 16:14:04 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks: ['mocha', 'chai', 'chai-as-promised'],
    frameworks: [
        'jasmine',
        'jasmine-matchers',
    ],


    // list of files / patterns to load in the browser

    // Make sure to load *.modules.js first since they contain the module
    // definitions.
    files: [
        'javascript/**/*.js',
        'tests/unit/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [],

    // reporters: ['coverage', 'nested', 'growl'],
    reporters: ['coverage', 'osx', 'nested'],

    preprocessors: {
      'javascript/**/*.js': ['coverage'],
    },


    coverageReporter: {
      reporters: [
        // { type : 'html', dir: 'testing/coverage/' },
        { type: 'text-summary' }
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Safari'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
