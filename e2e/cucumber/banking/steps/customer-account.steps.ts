import { expect } from 'chai';
import {
  Given,
  Then,
} from 'cucumber';
import { browser } from 'protractor';
import {
  harryPotter,
  hermoineGranger,
  registeredUsers,
} from '../../../jasmine/banking/support/constants/users';
import { CustomerAccountPage } from '../../../page-objects/banking/customer-account-page.po';
import { CustomerLoginPage } from '../../../page-objects/banking/customer-login-page.po';

const customer: CustomerLoginPage = new CustomerLoginPage();
const account: CustomerAccountPage = new CustomerAccountPage();

Given(/^I am logged in as (.*)$/, async function (userName: string) {
  // TODO: This will be required for the setup. Will likely need to move to a common method
  switch (userName) {
    case `${ hermoineGranger.firstName } ${ hermoineGranger.lastName }`:
      this.user = hermoineGranger;
      break;
    case `${ harryPotter.firstName } ${ harryPotter.lastName }`:
      this.user = harryPotter;
      break;
    default:
      throw new Error('Customer name is not supported!');
  }

  // Add one to index as registeredUsers doesn't account for the '---Your Name---' option
  this.userIndex = registeredUsers.indexOf(this.user) + 1;
  await browser.get('BankingProject/#/customer');
  await customer.content.userSelect.select.clickOptionByIndex(this.userIndex);
  await customer.content.loginButton.click();
  this.accountIndex = 0;
  this.userAccount = this.user.accounts[this.accountIndex];
});

Then(/^the customer's default account should be selected$/, async function () {
  expect(await account.content.accountSelect.getCurrentOptionText())
    .to.equal(this.userAccount.number.toString(), 'Selected account number');
});

Then(/^details of the customer's default account should be displayed$/, async function () {
  expect(await account.content.getAccountDetailsText()).to.equal(
    // tslint:disable-next-line:max-line-length
    `Account Number : ${ this.userAccount.number.toString() } , Balance : ${ this.userAccount.startingBalance } , Currency : ${ this.userAccount.currency }`);
});
