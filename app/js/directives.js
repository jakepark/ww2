'use strict';

/* Directives */
var ww2Controllers = angular.module('ww2Controllers');

ww2Controllers.directive('paraImg', [function (){
    return {
      restrict: 'E',
      link: function(scope, element, attrs){

        var page = scope.page;
        var key = scope.key;
        var val = scope.value;
        var tag_open;
        var tag_close;
        
        var content = scope.chapter.pages[page][key][val];

        var item;


        if (key === "paragraphs"){
          tag_open = "<p>"
          tag_close = "</p>"

        } else if (key === "images"){


          tag_open = "<img src="
          tag_close = ">"
        }

        item = tag_open + content + tag_close

        element.append(item);

      }
    }

}]);
