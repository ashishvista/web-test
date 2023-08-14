import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {

    get packageBtn() {
        return $('//mat-card//p[normalize-space()="Packages"]');
    }


    open() {
        return super.open('');
    }
}

export default new HomePage();
