import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#login-email');
    }

    get inputPassword() {
        return $('#login-password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get packageBtn() {
        return $('body > app-root > app-sidenav > mat-sidenav-container > mat-sidenav-content > perfect-scrollbar > div > div.ps-content > div > app-home > div > div.row.count-card-wrapper > mat-card:nth-child(8)');

    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

export default new LoginPage();
