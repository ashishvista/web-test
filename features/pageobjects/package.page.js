import { $ } from '@wdio/globals'
import Page from './page.js';

class PackagePage extends Page {

    get addPackageBtn() {
        return $('//mat-icon[normalize-space()="check"]');

    }

    get inputName() {
        return $('//input[@formcontrolname="name"]')
    }

    get inputLength() {
        return $('//input[@formcontrolname="length"]')
    }
    get inputWidth() {
        return $('//input[@formcontrolname="width"]')
    }
    get inputHeight() {
        return $('//input[@formcontrolname="height"]')
    }
    get packageSubmitBtn() {
    return $('//mat-icon[normalize-space()="check"]')

    }
    get packageDelButton(){
        return $('//mat-icon[normalize-space()="delete"]')
        
    }
    get packageAdded(){
        // return $("//div[normalize-space()='test']");
        return this._packageAdded
    }
    set packageAdded(packagename){
        
        this._packageAdded=$(`//div[normalize-space()="${packagename}"]`);
    }
    
    
    
    get packageDeleteConfirmationBtn(){
        // return $('#mat-dialog-0 > app-alert-dialog > mat-card > div > button > span.mat-button-wrapper')
        return $('//span[normalize-space()="Delete Package Type"]')
    }
    async addPackage(randomData) {
        await this.inputName.waitForExist({ timeout: 5000 });
        await browser.pause(1000)
        await this.inputName.setValue(randomData.name);
        await this.inputLength.setValue(randomData.length);
        await this.inputWidth.setValue(randomData.width);
        await this.inputHeight.setValue(randomData.height);
        await browser.pause(5000)
        var packageName=`${randomData.name} ${randomData.length} x ${randomData.width} x ${randomData.height}`
        await browser.sharedStore.set('packageName', packageName)
        console.log("Before adding----",packageName)
        await this.packageSubmitBtn.click();
    }


    async deletePackage(randomData) {
        const value = await browser.sharedStore.get('packageName')
        // var aaa=`//div[normalize-space()="${value}"]`;
        this.packageAdded=value
        await this.packageAdded.waitForExist({ timeout: 5000 });
        await this.packageAdded.click();
      
        await browser.pause(1000)
        await this.packageDelButton.waitForExist({ timeout: 5000 });
        await this.packageDelButton.click();

        await browser.pause(1000)
        await this.packageDeleteConfirmationBtn.waitForExist({ timeout: 5000 });
        await this.packageDeleteConfirmationBtn.click();
        await browser.pause(1000)
      
    }

    open() {
        return super.open('');
    }
}

export default new PackagePage();
