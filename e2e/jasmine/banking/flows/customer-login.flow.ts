import { browser } from 'protractor';
import { CustomerLoginPage } from '../../../page-objects/banking/customer-login-page.po';
import { registeredUsers } from '../support/constants/users';
import { BaseFlow } from './base.flow';
import { User } from '../support/interfaces/user';
import { RgbaColour } from '../support/enums/rgba-colour.enum';
import { RgbColour } from '../support/enums/rgb-colour.enum';

const customer: CustomerLoginPage = new CustomerLoginPage();

export class CustomerLoginFlow extends BaseFlow {

  constructor() {
    super(customer);
  }

  public async goToCustomerLogin(): Promise<void> {
    await browser.get('BankingProject/#/customer');
  }

  public async selectRegisteredUser(user: User): Promise<void> {
    // Add one to index as registeredUsers doesn't account for the '---Your Name---' option
    const index: number = registeredUsers.indexOf(user) + 1;
    await customer.content.userSelect.clickOptionByIndex(index);
  }

  public async selectDefaultRegisteredUserOption(): Promise<void> {
    await customer.content.userSelect.clickOptionByIndex(0);
  }

  public async confirmDefaultRegisteredUserOption(): Promise<void> {
    expect(await customer.content.userSelect.getCurrentOptionText()).toEqual('---Your Name---');
  }

  public async confirmLoginOptionIsNotAvailable(): Promise<void> {
    expect(await customer.content.loginButton.isVisible()).toEqual(false, 'Login button is visible');
  }

  public async confirmLoginOptionIsAvailable(): Promise<void> {
    expect(await customer.content.loginButton.isVisible()).toEqual(true, 'Login button is visible');
    expect(await customer.content.loginButton.getText()).toEqual("Login");
    expect(await customer.content.loginButton.getTextColour()).toEqual(RgbaColour.DarkGrey);
    expect(await customer.content.loginButton.getBackgroundColour()).toEqual(RgbaColour.LightGrey);
    expect(await customer.content.loginButton.getBorderColour()).toEqual(RgbColour.MidGrey);
  }

  public async confirmRegisteredUserList(): Promise<void> {
    expect(await customer.content.userSelect.getLabelText()).toEqual('Your Name :');
    expect(await customer.content.userSelect.getOptionsCount()).toEqual(registeredUsers.length + 1);
    expect(await customer.content.userSelect.getOptionTextByIndex(0)).toEqual('---Your Name---');
    for (let i: number = 1; i <= registeredUsers.length; i++) {
      expect(await customer.content.userSelect.getOptionTextByIndex(i))
        .toEqual(`${ registeredUsers[i - 1].firstName } ${ registeredUsers[i - 1].lastName }`);
    }
  }

}
