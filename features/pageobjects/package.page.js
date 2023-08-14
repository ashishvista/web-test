import { $ } from '@wdio/globals'
import Page from './page.js';

class PackagePage extends Page {

    get addPackageBtn() {
        return $('body > app-root > app-sidenav > mat-sidenav-container > mat-sidenav-content > app-header > mat-toolbar > button.mat-focus-indicator.button-disabled.mat-icon-button.mat-button-base.ng-star-inserted');

    }

    get inputName() {
        return $('#mat-input-1')
    }

    get inputLength() {
        return $('#mat-input-2')
    }
    get inputWidth() {
        return $('#mat-input-3')
    }
    get inputHeight() {
        return $('#mat-input-4')
    }
    get packageSubmitBtn() {
        return $('body > app-root > app-sidenav > mat-sidenav-container > mat-sidenav-content > perfect-scrollbar > div > div.ps-content > div > app-dashboard > div > div:nth-child(2) > app-package-type-manage > mat-toolbar > button')
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
