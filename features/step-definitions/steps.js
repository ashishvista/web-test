import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import TopMenu from '../pageobjects/top.menu.js';
import PackagePage from '../pageobjects/package.page.js';
import HomePage from '../pageobjects/home.page.js';
const pages = {
    login: LoginPage,
    home: TopMenu,
    PackagePage: PackagePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});


When(/^I login with$/, async () => {
    let username = 'kloudship.qa.automation@mailinator.com'
    let password = 'Password1'
    await LoginPage.login(username, password)
    return true
});

Then(/^I should see a page title saying (.*)$/, async (message) => {
    await expect(browser).toHaveTitle(message)
});


When(/^I click package icon on home page$/, async () => {
    await HomePage.packageBtn.click()

});

When(/^I click add package icon on top menu$/, async () => {
    await TopMenu.packageBtn.click()
});

Then(/^add new package detail$/, async () => {
    await PackagePage.addPackage()
});


Then(/^i logout$/, async () => {
    await TopMenu.logout()
});

