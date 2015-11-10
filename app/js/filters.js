'use strict';

/* Filters */

angular.module('ww2Filters',[]).filter('checkmark', function(){
  return function(input){
    return input ? '\u2713': '\u2718';
  };
});


ww2.filter('num', function(){
  return function(input){
    return parseInt(input, 10);
  };
});
