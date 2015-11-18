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

ww2Controllers.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true,
    transclude: true, 
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});
