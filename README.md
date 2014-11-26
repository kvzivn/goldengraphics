scaffold
========

A simple front-end scaffold for web applications

It has Gulp (with a couple of handpicked plugins), Browsersync and Karma.

# Gulp
The following Gulp tasks are available:

- *gulp scripts*. Run JSHint on `javascript/**/*.js`.
- *gulp styles*. Compile `stylesheets/styles.scss` into `stylesheets/styles.css`.
- *gulp test*. Kickoff Karma unit testing.
- *gulp serve*. Start a Browsersync powered server on localhost:3000.
- *gulp watch*. Watch and auto-run *gulp styles* or *gulp scripts* on changes in `stylesheets` or `javascripts`.

# Karma
Add unit tests to `tests/unit` and run `karma tests/karma-unit.conf.js` or `npm test` to run the test suite.
