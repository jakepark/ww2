'use strict';

/* Filters */

angular.module('ww2Filters',[]).filter('checkmark', function(){
  return function(input){
    return input ? '\u2713': '\u2718';
  };
});


angular.module('ww2Filters',[]).filter('nl2br', function($sce){
  return function(text){
    return text ? $sce.trustAsHtml(text.replace(/\n/g, '<br/>')) : '';  
  };
});
