import { browser, by, element } from "protractor"
import { AppBasePage } from '../app.base.po';

export class AppRegister extends AppBasePage{
    constructor(){
        super();
    }

    fildName = element(by.id('name'));
    fildLastName = element(by.id('lastName'));
    fildEmail = element(by.id('email'));

    btnSave = element(by.id('btnSave'));

    navigateRegister(){
        this.navigateURL('/register')
    }

    navigateRegisterByLink(){
        this.navigateInLink('Register')
    }

    initNavigate(){
        this.navigateHome();
        this.navigateRegisterByLink();
    }

    getTitleRegister(){
        return this.getElementByXpath('/html/body/app-root/app-layout/div/div/app-body/div/app-register/div/h1').getText();
    }

    getResult(){
        return element(by.id('status')).getText();
    }

} 