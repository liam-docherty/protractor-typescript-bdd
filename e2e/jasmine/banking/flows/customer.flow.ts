import { browser } from 'protractor';
import { CustomerPage } from '../../../page-objects/banking/customer-page.po';
import { registeredUsers } from '../support/constants/users';
import { BaseFlow } from './base.flow';

const customer: CustomerPage = new CustomerPage();

export class CustomerFlow extends BaseFlow {

  constructor() {
    super(customer);
  }

  public async goToCustomerLogin(): Promise<void> {
    await browser.get('BankingProject/#/customer');
  }

  public async confirmDefaultRegisteredUserOption(): Promise<void> {
    expect(await customer.content.userSelect.getCurrentOptionText()).toEqual('---Your Name---');
  }

  public async confirmRegisteredUserList(): Promise<void> {
    expect(await customer.content.userSelect.getOptionsCount()).toEqual(registeredUsers.length + 1);
    expect(await customer.content.userSelect.getOptionTextByIndex(0)).toEqual('---Your Name---');
    for (let i: number = 1; i <= registeredUsers.length; i++) {
      expect(await customer.content.userSelect.getOptionTextByIndex(i))
        .toEqual(`${ registeredUsers[i - 1].firstName } ${ registeredUsers[i - 1].lastName }`);
    }
  }

}
