const webpackConfig = require('./webpack.config.js');

webpackConfig.babel.plugins = [
  ['__coverage__', {
    ignore: '(*\\.spec\\.js)',
    only: 'src/'
  }]
];

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/test-main.js'
    ],
    exclude: [],
    preprocessors: {
      'test/test-main.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: './',
      reporters: [
        { type: 'html', subdir: 'coverage' },
        { type: 'json', subdir: 'coverage' },
        {
          type: 'text-summary',
          watermarks: {
            statements: [95.38, 97.38],
            branches: [81.81, 83.81],
            functions: [95.96, 97.96],
            lines: [95.77, 97.77]
          }
        }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    webpack: webpackConfig
  })
};
