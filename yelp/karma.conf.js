// Karma configuration
// Generated on Sun Jan 08 2017 20:49:07 GMT-0800 (PST)
var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    },

    files: [
      'tests.webpack.js'
    ],

    exclude: [
      ''''
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    reporters: ['spec'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity,

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ]
  })
}
