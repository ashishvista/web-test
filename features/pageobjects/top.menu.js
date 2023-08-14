import { $ } from '@wdio/globals'
import Page from './page.js';

class TopMenu extends Page {
 
    get packageBtn () {
        // return $('body > app-root > app-sidenav > mat-sidenav-container > mat-sidenav-content > perfect-scrollbar > div > div.ps-content > div > app-home > div > div.row.count-card-wrapper > mat-card:nth-child(8)');
        return $('//mat-toolbar//mat-icon[normalize-space()="add"]');
    }

    get threedotsBtn () {
        return $('//mat-toolbar//mat-icon[normalize-space()="more_vert"]');

    }
    get logoutBtn () {
        return $('#mat-menu-panel-0 > div > button:nth-child(6)');

    }
    async logout(){
       await this.threedotsBtn.click();
       await this.logoutBtn.click();
       await browser.pause(3000)
    }

    open () {
        return super.open('');
    }
}

export default new TopMenu();
