import { CustomerLoginPage } from '../../../page-objects/banking/customer-login-page.po';
import { registeredUsers } from '../support/constants/users';
import { RgbColour } from '../support/enums/rgb-colour.enum';
import { RgbaColour } from '../support/enums/rgba-colour.enum';
import { BaseFlow } from './base.flow';

const customer: CustomerLoginPage = new CustomerLoginPage();

export class CustomerLoginFlow extends BaseFlow {

  constructor() {
    super(customer);
  }

  public async selectDefaultRegisteredUserOption(): Promise<void> {
    await customer.content.userSelect.select.clickOptionByIndex(0);
  }

  public async confirmLoginOptionIsNotAvailable(): Promise<void> {
    expect(await customer.content.loginButton.isVisible()).toEqual(false, 'Login button is visible');
  }

  public async confirmLoginOptionIsAvailable(): Promise<void> {
    expect(await customer.content.loginButton.isVisible()).toEqual(true, 'Login button is visible');
    expect(await customer.content.loginButton.getText()).toEqual('Login');
    expect(await customer.content.loginButton.getTextColour()).toEqual(RgbaColour.DarkGrey);
    expect(await customer.content.loginButton.getBackgroundColour()).toEqual(RgbaColour.LightGrey);
    expect(await customer.content.loginButton.getBorderColour()).toEqual(RgbColour.MidGrey);
  }

  public async confirmRegisteredUserList(): Promise<void> {
    expect(await customer.content.userSelect.getLabelText()).toEqual('Your Name :');
    expect(await customer.content.userSelect.select.getOptionsCount()).toEqual(registeredUsers.length + 1);
    expect(await customer.content.userSelect.select.getOptionTextByIndex(0)).toEqual('---Your Name---');
    for (let i: number = 1; i <= registeredUsers.length; i++) {
      expect(await customer.content.userSelect.select.getOptionTextByIndex(i))
        .toEqual(`${ registeredUsers[i - 1].firstName } ${ registeredUsers[i - 1].lastName }`);
    }
  }

}
