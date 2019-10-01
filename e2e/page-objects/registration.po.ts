import {
  by,
  element,
  ElementFinder,
} from 'protractor';
import { User } from '../support/interface/user';
import { ButtonAtom } from './atoms/button-atom.po';

export class Registration {
  public readonly registerButton: ButtonAtom;

  private firstNameField: ElementFinder = element(by.id('firstName'));
  private lastNameField: ElementFinder = element(by.id('Text1'));
  private usernameField: ElementFinder = element(by.id('username'));
  private passwordField: ElementFinder = element(by.id('password'));
  private buttonBar: ElementFinder = element(by.className('form-actions'));

  constructor() {
    this.registerButton = new ButtonAtom(this.buttonBar.element(by.css('.btn-primary')));
  }

  public async enterFirstName(firstName: string): Promise<void> {
    await this.firstNameField.sendKeys(firstName);
  }

  public async enterLastName(lastName: string): Promise<void> {
    await this.lastNameField.sendKeys(lastName);
  }

  public async enterUsername(username: string): Promise<void> {
    await this.usernameField.sendKeys(username);
  }

  public async enterPassword(password: string): Promise<void> {
    await this.passwordField.sendKeys(password);
  }

  public async isRegisterButtonEnabled(): Promise<boolean> {
    return await this.registerButton.isEnabled();
  }

  public async completeRegistrationForm(user: User): Promise<void> {
    await this.enterFirstName(user.firstName);
    await this.enterLastName(user.lastName);
    await this.enterUsername(user.username);
    await this.enterPassword(user.password);
    await this.registerButton.click();
  }
}
