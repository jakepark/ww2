'use strict';

/* Controllers */

var ww2Controllers = angular.module('ww2Controllers', []);

ww2Controllers.controller('ChapterListCtrl', ['$scope', 'Chapter',
  function ($scope, Chapter) {
    $scope.chapters = Chapter.query();
    $scope.orderProp = 'age';
  }
]);

ww2Controllers.controller('ChapterDetailCtrl', ['$scope', '$routeParams', 'Chapter',
  function($scope, $routeParams, Chapter) {
    $scope.chapter = Chapter.get({chapterId: $routeParams.chapterId}, function(chapter){
      $scope.mainImageUrl = chapter.images[0];
    });

    $scope.setImage = function(imageUrl){
      $scope.mainImageUrl = imageUrl;
    };
  }
]);
