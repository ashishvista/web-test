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

    async addPackage(randomData) {
        await this.inputName.waitForExist({ timeout: 5000 });
        await this.inputName.setValue(randomData.name);
        await this.inputLength.setValue(randomData.length);
        await this.inputWidth.setValue(randomData.width);
        await this.inputHeight.setValue(randomData.height);
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
