import {
  by,
  element,
  ElementFinder,
} from 'protractor';
import { User } from '../../jasmine/registration-login/support/interfaces/user';

export class Login {
  private usernameField: ElementFinder = element(by.id('username'));
  private passwordField: ElementFinder = element(by.id('password'));
  private buttonBar: ElementFinder = element(by.className('form-actions'));
  private loginButton: ElementFinder = this.buttonBar.element(by.className('btn-primary'));
  private successAlert: ElementFinder = element(by.className('alert-success'));

  public async enterUsername(username: string): Promise<void> {
    await this.usernameField.sendKeys(username);
  }

  public async enterPassword(password: string): Promise<void> {
    await this.passwordField.sendKeys(password);
  }

  public async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  public async completeLoginForm(user: User): Promise<void> {
    await this.enterUsername(user.username);
    await this.enterPassword(user.password);
    await this.clickLoginButton();
  }

  public async getSuccessAlertText(): Promise<string> {
    return await this.successAlert.getText();
  }
}
