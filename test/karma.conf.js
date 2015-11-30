module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/public/vendor/angular/angular.js',
      'app/public/vendor/angular-route/angular-route.js',
      'app/public/vendor/angular-resource/angular-resource.js',
      'app/public/vendor/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
