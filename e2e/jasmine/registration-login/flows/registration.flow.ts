import { browser } from 'protractor';
import { Login } from '../../../page-objects/registration-login/login.po';
import { Registration } from '../../../page-objects/registration-login/registration.po';
import { config } from '../../config';
import { BasicFlow } from './basic.flow';

const registration: Registration = new Registration();
const login: Login = new Login();

export class RegistrationFlow extends BasicFlow {
  public async confirmRedirectToLoginPage(): Promise<void> {
    expect(await browser.getCurrentUrl()).toEqual(`${ config.baseUrl }registration-login-example/#/login`);
    expect(await login.getSuccessAlertText()).toEqual('Registration successful');
  }
}
