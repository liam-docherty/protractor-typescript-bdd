/* tslint:disable:no-console */
import { browser } from 'protractor';
import { LoginPage } from '../../../page-objects/banking/login-page.po';

const login: LoginPage = new LoginPage();

export class LoginFlow {

  public async goToLogin(): Promise<void> {
    await browser.get('BankingProject/#/login');
  }

  public async confirmPageDetails(): Promise<void> {
    console.log('Heading: ' + await login.header.getHeadingText());
    console.log('Home Button Text: ' + await login.header.homeButton.getText());
    console.log('Home Button Enabled: ' + await login.header.homeButton.isEnabled());
    console.log('Customer Login Button Text: ' + await login.content.customerLoginButton.getText());
    console.log('Manager Login Button Text: ' + await login.content.managerLoginButton.getText());
  }

}
