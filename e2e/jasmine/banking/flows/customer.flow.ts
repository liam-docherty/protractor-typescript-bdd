/* tslint:disable:no-console */
import { browser } from 'protractor';
import { CustomerPage } from '../../../page-objects/banking/customer-page.po';
import { BaseFlow } from './base.flow';

const customer: CustomerPage = new CustomerPage();

export class CustomerFlow extends BaseFlow {

  constructor() {
    super(customer);
  }

  public async goToCustomerLogin(): Promise<void> {
    await browser.get('BankingProject/#/customer');
  }

  public async confirmPageDetails(): Promise<void> {
    console.log('Current option: ' + await customer.content.userSelect.getCurrentOptionText());
    await customer.content.userSelect.clickMenu();
    console.log('Option count: ' + await customer.content.userSelect.getOptionsCount());
    console.log('Option text: ' + await customer.content.userSelect.getOptionTextByIndex(2));
    await customer.content.userSelect.clickOptionByIndex(2);
    console.log('Current option: ' + await customer.content.userSelect.getCurrentOptionText());
    console.log('Login button text: ' + await customer.content.loginButton.getText());
  }

}
