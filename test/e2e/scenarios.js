'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('chapterCat App', function(){

  it('should redirect index.html to index.html#/chapters', function(){
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url){
      expect(url).toEqual('/chapters');
    });
  });

  describe('chapter list view', function(){
    beforeEach(function(){
      browser.get('app/index.html#/chapters');
    });

    var chapterList = element.all(by.repeater('chapter in chapters'));
    var query = element(by.model('query'));


    it('should render chapter specific links', function(){
      var query = element(by.model('query'));
      query.sendKeys('brecourt');
      element.all(by.css('.chapters li a')).first().click();
      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('/chapters/brecourt-manor-assault');
      });
    });



    describe('chapter detail view', function(){
      beforeEach(function(){
        browser.get('app/index.html#/chapters/brecourt-manor-assault');
      });

      it('should display brecourt-manor-assault page', function(){
        expect(element(by.binding('chapter.name')).getText()).toBe('Brecourt Manor Assault');
      })

      it('should display the first chapter image as the main chapter image', function(){
        expect(element(by.css('img.chapter')).getAttribute('src')).toMatch(/img\/chapters\/brecourt-manor-assault.0.jpg/);
      });

      it('should swap main image if a thumbnail image is clicked on', function(){
        element(by.css('.chapter-thumbs li:nth-child(3) img')).click();
        expect(element(by.css('img.chapter')).getAttribute('src')).toMatch(/img\/chapters\/brecourt-manor-assault.2.jpg/);

        element(by.css('.chapter-thumbs li:nth-child(1) img')).click();
        expect(element(by.css('img.chapter')).getAttribute('src')).toMatch(/img\/chapters\/brecourt-manor-assault.0.jpg/);
      })

    })

  });
});
