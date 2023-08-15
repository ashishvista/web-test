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
        this._packageAdded=$(`//div[normalize-space()='${packagename}']`);
    }

    get packageDeleteConfirmationBtn(){
        return $('#mat-dialog-0 > app-alert-dialog > mat-card > div > button > span.mat-button-wrapper')
    }
    async addPackage(randomData) {
        await this.inputName.waitForExist({ timeout: 5000 });
        await this.inputName.setValue(randomData.name);
        await this.inputLength.setValue(randomData.length);
        await this.inputWidth.setValue(randomData.width);
        await this.inputHeight.setValue(randomData.height);
        browser.pause(5000)
        var packageName=`${randomData.name} ${randomData.length} x ${randomData.width} x ${randomData.height}`
        await browser.sharedStore.set('packageName', packageName)
        console.log("Before adding----",packageName)
        await this.packageSubmitBtn.click();
    }


    async deletePackage(randomData) {
        // this.packageAdded='Omer.Jones10 4 x 15 x 18';
        // var str='Omer.Jones10 4 x 15 x 18';
        var packageName=`${randomData.name} ${randomData.length} x ${randomData.width} x ${randomData.height}`
        console.log("Before deleting----",packageName)
        const value = await browser.sharedStore.get('packageName')
        this.packageAdded=value
       browser.pause(5000)
        await this.packageAdded.click();
        await this.packageDelButton.waitForExist({ timeout: 5000 });
        await this.packageDelButton.click();
        await this.packageDeleteConfirmationBtn.waitForExist({ timeout: 5000 });
        await this.packageDeleteConfirmationBtn.click();
    }

    open() {
        return super.open('');
    }
}

export default new PackagePage();
