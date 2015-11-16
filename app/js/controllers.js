'use strict';

/* Controllers */

var ww2Controllers = angular.module('ww2Controllers', ['ngSanitize']);


ww2Controllers.controller('ChapterListCtrl', ['$scope', 'Chapter',
  function ($scope, Chapter) {
    $scope.chapters = Chapter.query();
    $scope.orderProp = 'id';
  }
]);

ww2Controllers.controller('ChapterDetailCtrl', ['$scope', '$routeParams', 'Chapter',
  function($scope, $routeParams, Chapter) {
    $scope.chapter = Chapter.get({chapterId: $routeParams.chapterId}, function(chapter){
      // $scope.mainImageUrl = chapter.images[0];
      $scope.pages = chapter.pages;


      $scope.page = 0;
      if ($routeParams.pageId){
        $scope.page = parseInt($routeParams.pageId, 10);
      }

      $scope.pageFirst = true;
      if ($scope.page !== 0){
        $scope.pageFirst = false;
      }

      $scope.pageLast = false;
      if ($scope.page >= ($scope.pages.length-1)){
        $scope.pageLast = true;
      }

    });


    // $scope.setImage = function(imageUrl){
    //   $scope.mainImageUrl = imageUrl;
    // };

    $scope.navbarLeft = function() {
      var navbar = angular.element(document.querySelector(".chapter-container"));
      navbar.removeClass('shift-right');
      navbar.addClass('shift-left');
    }

    $scope.navbarRight = function() {
      var navbar = angular.element(document.querySelector(".chapter-container"));
      navbar.removeClass('shift-left');
      navbar.addClass('shift-right');

    }


  }
]);
