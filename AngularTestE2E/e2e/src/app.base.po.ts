import {browser, by, element, ExpectedConditions} from 'protractor';

export abstract class AppBasePage {
    constructor() {
        browser.driver.manage().window().maximize();
    }

    navigateHome(){
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    navigateURL(url: string){
        return browser.get(url) as Promise<any>
    }

    navigateInLink(link: string){
        browser.wait(ExpectedConditions.elementToBeClickable(element(by.linkText(link)))).then(()=> {
            return element(by.linkText(link)).click();
        })
    }

    getElementByXpath(xpath: string){
        return element(by.xpath(xpath))
    }

    sleeped = (mls: number) =>{
        browser.sleep(mls);
    }
}