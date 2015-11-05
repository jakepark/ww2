'use strict';

/* jasmine specs for controllers go here */
describe('chapterCat controllers', function(){

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('ww2App'));
  beforeEach(module('ww2Services'));

  describe('chapterListCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('chapters/chapters.json').
        respond([{name: 'Brecourt Manor Assault'}]);

      scope = $rootScope.$new();
      ctrl = $controller('chapterListCtrl', {$scope:scope});
    }));



    it('should set the default value of orderProp model', function(){
      expect(scope.orderProp).toBe('date');
    });

  });

  describe('chapterDetailCtrl', function(){
    var scope, $httpBackend, ctrl,
      xyzchapterData = function() {
            return {
              name: 'chapter xyz',
              images: ['image/url1.png', 'image/url2.png']
            }
          };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('chapters/xyz.json').respond(xyzchapterData());

      $routeParams.chapterId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('chapterDetailCtrl', {$scope: scope});
    }));


    it('should fetch chapter detail', function() {
      expect(scope.chapter).toEqualData({});
      $httpBackend.flush();

      expect(scope.chapter).toEqualData(xyzchapterData());
    });
  });

});
