import { browser } from 'protractor';
import { Landing } from '../../../page-objects/registration-login/landing.po';
import { Login } from '../../../page-objects/registration-login/login.po';
import { config } from '../../config';
import { User } from '../support/interfaces/user';
import { BasicFlow } from './basic.flow';

const login: Login = new Login();
const landing: Landing = new Landing();

export class LoginFlow extends BasicFlow {
  public async goToLogin(): Promise<void> {
    await browser.get('registration-login-example/#/login');
  }

  public async confirmRedirectToLandingPage(user: User): Promise<void> {
    expect(await browser.getCurrentUrl()).toEqual(`${ config.baseUrl }registration-login-example/#/`);
    expect(await landing.getHeadingText()).toEqual('Hi Test!');
    expect(await landing.getHeadingParagraphText()).toEqual('You\'re logged in!!');
    expect(await landing.getSubHeadingText()).toEqual('All registered users:');
    expect(await landing.countRegisteredUsers()).toEqual(1);
    expect(await landing.getUserText(0))
      .toEqual(`${ user.username } (${ user.firstName } ${ user.lastName }) - Delete`);
    expect(await landing.getLogoutButtonText()).toEqual('Logout');
  }
}
