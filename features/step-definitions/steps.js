import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import TopMenu from '../pageobjects/top.menu.js';
import PackagePage from '../pageobjects/package.page.js';

const pages = {
    login: LoginPage,
    home: TopMenu,
    PackagePage: PackagePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

When(/^I login with$/, async () => {
    let username = 'kloudship.qa.automation@mailinator.com'
    let password = 'Password1'
    await LoginPage.login(username, password)
    return true
});

Then(/^I should see a page title saying (.*)$/, async (message) => {
    await expect(browser).toHaveTitle(message)
});




When(/^I click package icon$/, async () => {
    // await (await HomePage.packageBtn).click()
    await TopMenu.packageBtn.click()

});

// Then(/^I should see a package page title saying$/, async () => {
//     await expect(browser).toHaveTitle("xyz")
// });

When(/^I click add package icon$/, async () => {
    await PackagePage.addPackageBtn.click()
});

Then(/^i add package details$/, async () => {
    await PackagePage.addPackage()
});


Then(/^i logout$/, async () => {
    await TopMenu.logout()
});

