'use strict';

/* App Module */

var ww2App = angular.module('ww2App', [
  'ngRoute',
  'angular-google-analytics',
  'ww2Animations',
  'ww2Controllers',
  'ww2Filters',
  'ww2Services'
]);

ww2App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/chapters', {
        templateUrl: 'partials/chapter-list.html',
        controller: 'ChapterListCtrl'
      }).
      when('/chapters/:chapterId', {
        templateUrl: 'partials/chapter-resources.html',
        controller: 'ChapterDetailCtrl'
      }).
      when('/chapters/:chapterId/0', {
        templateUrl: 'partials/chapter-resources.html',
        controller: 'ChapterDetailCtrl'
      }).
      when('/chapters/:chapterId/:pageId', {
        templateUrl: 'partials/chapter-detail.html',
        controller: 'ChapterDetailCtrl'
      }).
      otherwise({
        redirectTo: '/chapters'
      });
  }]);

  ww2App.config(function (AnalyticsProvider){
    AnalyticsProvider.setAccount('UA-68692328-4');
    AnalyticsProvider.trackPages(true);
  })

  ww2App.run(function(Analytics){});
