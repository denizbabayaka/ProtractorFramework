let homepage=require('../pages/homepage');



// describe is a test suit and inside there is an another function
describe('demo calculator test', function () {

    it('addition test', function () {

        //  browser.get('https://juliemr.github.io/protractor-demo/');

        // this method comes from homepage 
        homepage.get('https://juliemr.github.io/protractor-demo/');
        
        

        //var input = element(by.model('first'));
        //input.sendKeys('5');

        homepage.enterFirstNumber('5');

        //var input = element(by.model('second'));
        //input.sendKeys('2');

        homepage.enterSecondNumber('2');

        //element(by.css('[ng-click="doAddition()"]')).click();

        homepage.clickGo();

        //var result = element(by.cssContainingText('.ng-binding', '7'));

        //expect(result.getText()).toEqual('7');

        homepage.verifyResult('7');





        browser.sleep(2000);
    });

    it('substraction test', function () {

        //  browser.get('https://juliemr.github.io/protractor-demo/');

        // this method comes from homepage 
        homepage.get('https://juliemr.github.io/protractor-demo/');
        
        

        //var input = element(by.model('first'));
        //input.sendKeys('5');

        homepage.enterFirstNumber('5');

        //var input = element(by.model('second'));
        //input.sendKeys('2');

        homepage.enterSecondNumber('2');

        //element(by.css('[ng-click="doAddition()"]')).click();

        homepage.clickGo();

        //var result = element(by.cssContainingText('.ng-binding', '7'));

        //expect(result.getText()).toEqual('7');

        homepage.verifyResult('7');





        browser.sleep(2000);
    });

    


    

});