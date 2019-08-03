import { by, element, ElementFinder } from 'protractor';
import { RegistrationFields } from '../support/interface/registration-fields';

export class Registration {
  private firstNameField: ElementFinder = element(by.id('firstName'));
  private lastNameField: ElementFinder = element(by.id('Text1'));
  private usernameField: ElementFinder = element(by.id('username'));
  private passwordField: ElementFinder = element(by.id('password'));
  private registerButton: ElementFinder = element(by.className('form-actions')).element(by.css('.btn-primary'));

  async enterFirstName(text: string): Promise<void> {
    await this.firstNameField.sendKeys(text);
  }

  async enterLastName(text: string): Promise<void> {
    await this.lastNameField.sendKeys(text);
  }

  async enterUsername(text: string): Promise<void> {
    await this.usernameField.sendKeys(text);
  }

  async enterPassword(text: string): Promise<void> {
    await this.passwordField.sendKeys(text);
  }

  async clickRegisterButton(): Promise<void> {
    await this.registerButton.click();
  }

  async isRegisterButtonEnabled(): Promise<boolean> {
    return await this.registerButton.isEnabled();
  }

  async completeRegistrationForm(fields: RegistrationFields): Promise<void> {
    await this.enterFirstName(fields.firstName);
    await this.enterLastName(fields.lastName);
    await this.enterUsername(fields.username);
    await this.enterPassword(fields.password);
    await this.clickRegisterButton();
  }
}
