import { AppRegister } from "./app.po"
import { browser, logging } from 'protractor';

describe('Form register', ()=>{
    let page: AppRegister;
    beforeEach(()=>{
        page = new AppRegister();
    })

    it('Should navigate register', ()=> {
        page.initNavigate();
        expect(page.getTitleRegister()).toContain('Register')
    })

    it('Should register',()=>{
        page.initNavigate();

        page.fildName.sendKeys('Lipe');
        page.fildLastName.sendKeys('Ferreira');
        page.fildEmail.sendKeys('lipe@teste.com');

        page.btnSave.click();
        page.sleeped(2000);

        expect(page.getResult()).toBe('Status: true');
    })
})