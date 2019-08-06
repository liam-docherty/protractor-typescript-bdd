import { browser } from 'protractor';
import { Landing } from '../../page-objects/landing.po';
import { Login } from '../../page-objects/login.po';
import { config } from '../config';
import { BasicFlow } from './basic.flow';

const login: Login = new Login();
const landing: Landing = new Landing();

export class LoginFlow extends BasicFlow {
  public async goToLogin(): Promise<void> {
    await browser.get('registration-login-example/#/login');
  }

  public async confirmRedirectToLandingPage(): Promise<void> {
    await browser.getCurrentUrl().then(url => expect(url)
      .toEqual(`${ config.baseUrl }registration-login-example/#/`));
    await landing.getHeadingText().then(text => expect(text).toEqual('Hi Test!'));
    // await landing.getHeadingParagraphText().then(text => expect(text).toEqual('You\'re logged in!!'));
    await landing.getSubHeadingText().then(text => expect(text).toEqual('All registered users:'));
    // await landing.getLogoutButtonText().then(text => expect(text).toEqual('Logout'));
  }
}
