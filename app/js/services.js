'use strict';

/* Services */

var ww2Services = angular.module('ww2Services', ['ngResource']);

ww2Services.factory('Chapter', ['$resource',
  function($resource){
    return $resource('chapters/:chapterId.json', {}, {
      query: {method:'GET', params:{chapterId:'chapters'}, isArray:true}
    });
  }
]);
