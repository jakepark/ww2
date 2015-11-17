'use strict';

/* Directives */
var ww2Controllers = angular.module('ww2Controllers');

ww2Controllers.directive('paraImg', [function (){
    return {
      restrict: 'E',
      link: function(scope, element, attrs){
        var tag='<h6>Temp</h6>';
        element.append(tag);

      }
    }

}]);
