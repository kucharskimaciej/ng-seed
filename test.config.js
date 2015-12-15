// Karma configuration
// Generated on Tue Jan 20 2015 10:28:29 GMT+0100 (CET)

module.exports = function(config) {
  var developmentConfig = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'angular-filesort'],


    // list of files / patterns to load in the browser
    files: [
      'build/libs.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'source/js/**/*.js',
      'build/templates.js',
      'test/**/*_spec.js'
    ],
    angularFilesort: {
      whitelist: [
        'source/js/**/*.js'
      ]
    },

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'source/js/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,
    reporters: ['nested', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'lcov' },
        //{ type: 'text-summary' }
      ]
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    client: {
      captureConsole: true
    }
  };

  var productionConfig = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'build/release.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/**/*_spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'build/release.js': ['coverage']
    },
    port: 9876,
    colors: true,
    reporters: ['nested'],
    coverageReporter: {
      type : 'text-summary'
    },
    logLevel: config.LOG_ERROR,
    browsers: ['PhantomJS'],
    singleRun: true
  };

  config.set(process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig);
};
