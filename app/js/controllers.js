'use strict';

/* Controllers */

var ww2Controllers = angular.module('ww2Controllers', ['ngSanitize', 'ui.bootstrap']);


ww2Controllers.controller('ChapterListCtrl', ['$scope', 'Chapter',
  function ($scope, Chapter) {
    $scope.chapters = Chapter.query();
    $scope.orderProp = 'id';
  }
]);

ww2Controllers.controller('ChapterDetailCtrl',
  ['$scope', '$routeParams', 'Chapter', '$compile', '$uibModal',

  function($scope, $routeParams, Chapter, $compile, $uibModal) {
    debugger
    $scope.chapter = Chapter.get({chapterId: $routeParams.chapterId}, function(chapter){
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

    $scope.open = function() {
        var uibModalInstance = $uibModal.open({
          templateUrl: 'js/templates/modal.html',
          controller: 'ModalInstanceCtrl',
        });
      };

    $scope.navbarLeft = function() {
      var navbar = angular.element(document.querySelector(".chapter-container"));
      navbar.removeClass('shift-right');
      navbar.addClass('shift-none');

      var navright = angular.element(document.querySelector(".pageNext"));
      navright.removeClass('shift-left');
      navright.addClass('shift-none');
    }

    $scope.navbarRight = function() {
      var navbar = angular.element(document.querySelector(".chapter-container"));
      navbar.removeClass('shift-none');
      navbar.addClass('shift-right');

      var navright = angular.element(document.querySelector(".pageNext"));
      navright.removeClass('shift-none');
      navright.addClass('shift-left');
    }

    $scope.parentFunction = function(){
      console.log('parent')
    }

    $scope.viewModal = function(){

      var elem = "<text-modal parent-function=parentFunction()></text-modal>"
      var isoScope = $scope.$new(true);
      isoScope.parentFunction = $scope.parentFunction;

      $compile(elem)(isoScope, function(x){
        $('body').append(x);
      });
    }
    // $scope.mainImageUrl = chapter.images[0];
    // $scope.setImage = function(imageUrl){
    //   $scope.mainImageUrl = imageUrl;
    // };

  }
]);

ww2Controllers.controller('ModalCtrl', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };


  $scope.view3dModel = function(){
    $scope.templateURL = 'partials/model-detail.html'
  }
}]);

ww2Controllers.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance ) {
  debugger
  // var target = $('#basicModal');
  // target.modal('show');
}]);
