import { by, element, ElementFinder } from 'protractor';
import { User } from '../support/interface/user';

export class Registration {
  private firstNameField: ElementFinder = element(by.id('firstName'));
  private lastNameField: ElementFinder = element(by.id('Text1'));
  private usernameField: ElementFinder = element(by.id('username'));
  private passwordField: ElementFinder = element(by.id('password'));
  private registerButton: ElementFinder = element(by.className('form-actions')).element(by.css('.btn-primary'));

  public async enterFirstName(text: string): Promise<void> {
    await this.firstNameField.sendKeys(text);
  }

  public async enterLastName(text: string): Promise<void> {
    await this.lastNameField.sendKeys(text);
  }

  public async enterUsername(text: string): Promise<void> {
    await this.usernameField.sendKeys(text);
  }

  public async enterPassword(text: string): Promise<void> {
    await this.passwordField.sendKeys(text);
  }

  public async clickRegisterButton(): Promise<void> {
    await this.registerButton.click();
  }

  public async isRegisterButtonEnabled(): Promise<boolean> {
    return await this.registerButton.isEnabled();
  }

  public async completeRegistrationForm(user: User): Promise<void> {
    await this.enterFirstName(user.firstName);
    await this.enterLastName(user.lastName);
    await this.enterUsername(user.username);
    await this.enterPassword(user.password);
    await this.clickRegisterButton();
  }
}
