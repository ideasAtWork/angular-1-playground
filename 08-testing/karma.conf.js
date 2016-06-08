// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-phantomjs-launcher",
      "karma-coverage",
      "karma-junit-reporter",
      "karma-osx-reporter"
    ],

    preprocessors: {
      'app/**/!(*spec).js': ['coverage']
    },

    // list of files / patterns to load in the browser
    files: [
      '../bower_components/angular/angular.js',
      'app/**/*.js',
      'spec/**/*.js',
    ],


    // list of files to exclude
    exclude: [
    ],

    reporters: ['progress', 'coverage', 'osx'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.js': ['coverage']
    },

    osxReporter: {
      host: "localhost",
      port: 1337
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
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
