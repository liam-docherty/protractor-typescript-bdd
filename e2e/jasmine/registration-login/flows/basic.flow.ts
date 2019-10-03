import { browser } from 'protractor';
import { Login } from '../../../page-objects/login.po';
import { Registration } from '../../../page-objects/registration.po';
import { User } from '../../../support/interface/user';

const registration: Registration = new Registration();
const login: Login = new Login();

export class BasicFlow {
  public async goToRegistration(): Promise<void> {
    await browser.get('registration-login-example/#/register');
  }

  public async completeRegistration(user: User): Promise<void> {
    await registration.completeRegistrationForm(user);
  }

  public async completeLogin(user: User): Promise<void> {
    await login.completeLoginForm(user);
  }
}
