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


    async addPackage() {
        await browser.pause(3000)
        await this.inputName.setValue('hello');
        await this.inputLength.setValue(this.between(1, 21));
        await this.inputWidth.setValue(this.between(1, 21));
        await this.inputHeight.setValue(this.between(1, 21));
        await this.packageSubmitBtn.click();
    }

    between(min, max) {
        return Math.floor(
            Math.random() * (max - min) + min
        )
    }

    open() {
        return super.open('');
    }
}

export default new PackagePage();
