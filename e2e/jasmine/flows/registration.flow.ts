import { browser } from 'protractor';
import { Login } from '../../page-objects/login.po';
import { Registration } from '../../page-objects/registration.po';
import { User } from '../../support/interface/user';
import { config } from '../config';

const registration: Registration = new Registration();
const login: Login = new Login();

export class RegistrationFlow {
  public async goToRegistration(): Promise<void> {
    await browser.get('registration-login-example/#/register');
  }

  public async completeRegistration(user: User): Promise<void> {
    await registration.completeRegistrationForm(user);
  }

  public async confirmRedirectToLogin(): Promise<void> {
    await browser.getCurrentUrl().then(url => expect(url)
      .toEqual(`${config.baseUrl}registration-login-example/#/login`));
    await login.getSuccessAlertText().then(text => expect(text).toEqual('Registration successful'));
  }
}