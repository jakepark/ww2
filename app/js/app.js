'use strict';

/* App Module */

var ww2App = angular.module('ww2App', [
  'ngRoute',

  'ww2Animations',
  'ww2Controllers',
  'ww2Filters',
  'ww2Services'
]);

ww2App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/toc', {
        templateUrl: 'partials/chapter-list.html',
        controller: 'ChapterListCtrl'
      }).
      when('/toc/:chapterId', {
        templateUrl: 'partials/chapter-detail.html',
        controller: 'ChapterDetailCtrl'
      }).
      otherwise({
        redirectTo: '/toc'
      });
  }]);
