'use strict';

/* Directives */
var ww2Controllers = angular.module('ww2Controllers');

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
    template: "<div class='ng-modal' ng-show='show'>" +
                "<div class='ng-modal-overlay'></div>" +
                "<div class='ng-modal-dialog' ng-style='dialogStyle'>" +
                  "<img src='assets/images/back_arrow.png' ng-click='hideModal()'>" +
                  "<div class='ng-modal-dialog-content' ng-transclude></div>" + 
                "</div>" +
              "</div>"
    // <img src='assets/images/back_arrow.png'>
  };
});
