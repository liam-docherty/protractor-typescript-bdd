import { browser } from 'protractor';
import { BasePage } from '../../../page-objects/banking/base-page.po';
import { CustomerAccountPage } from '../../../page-objects/banking/customer-account-page.po';
import { CustomerLoginPage } from '../../../page-objects/banking/customer-login-page.po';
import { config } from '../../config';
import { registeredUsers } from '../support/constants/users';
import { RgbColour } from '../support/enums/rgb-colour.enum';
import { RgbaColour } from '../support/enums/rgba-colour.enum';
import { User } from '../support/interfaces/user';

const customer: CustomerLoginPage = new CustomerLoginPage();
const account: CustomerAccountPage = new CustomerAccountPage();

export class BaseFlow {

  private readonly page: BasePage;

  constructor(page: BasePage) {
    this.page = page;
  }

  public async selectHomeOption(): Promise<void> {
    await this.page.header.homeButton.click();
  }

  public async selectLogoutOption(): Promise<void> {
    await this.page.header.logoutButton.click();
  }

  public async goToCustomerLogin(): Promise<void> {
    await browser.get('BankingProject/#/customer');
  }

  public async selectRegisteredUser(user: User): Promise<void> {
    // Add one to index as registeredUsers doesn't account for the '---Your Name---' option
    const index: number = registeredUsers.indexOf(user) + 1;
    await customer.content.userSelect.clickOptionByIndex(index);
  }

  public async goToCustomerAccount(user: User): Promise<void> {
    await this.goToCustomerLogin();
    await this.selectRegisteredUser(user);
    await customer.content.loginButton.click();
  }

  public async switchAccount(accountIndex: number): Promise<void> {
    await account.content.accountSelect.clickMenu();
    await account.content.accountSelect.clickOptionByIndex(accountIndex);
  }

  public async selectTransactionsOption(): Promise<void> {
    await account.content.transactionsTabButton.click();
  }

  public async goToCustomerAccountTransactions(user: User, accountIndex: number = 0): Promise<void> {
    await this.goToCustomerAccount(user);
    await this.switchAccount(accountIndex);
    await this.selectTransactionsOption();
  }

  public async clearCustomerAccountTransactions(user: User, accountIndex: number = 0): Promise<void> {
    await this.goToCustomerAccountTransactions(user, accountIndex);
    // TODO: Once page objects are done, add clicking the Reset button
  }

  public async confirmNotLoggedInHeaderDetails(): Promise<void> {
    await this.confirmCommonHeaderDetails();
    expect(await this.page.header.logoutButton.isVisible()).toBe(false, 'Is logout button visible?');
  }

  public async confirmLoggedInHeaderDetails(): Promise<void> {
    await this.confirmCommonHeaderDetails();
    expect(await this.page.header.logoutButton.getText()).toEqual('Logout');
    expect(await this.page.header.logoutButton.getTextColour()).toEqual(RgbaColour.DarkGrey);
    expect(await this.page.header.logoutButton.getBackgroundColour()).toEqual(RgbaColour.LightGrey);
    expect(await this.page.header.logoutButton.getBorderColour()).toEqual(RgbaColour.White);
  }

  public async confirmContentPanelDetails(): Promise<void> {
    expect(await this.page.panel.getBoxBackgroundColour()).toEqual(RgbaColour.LightGrey);
    expect(await this.page.panel.getBorderColour()).toEqual(RgbColour.LightGrey);
  }

  public async confirmRedirectToLoginHome(): Promise<void> {
    await this.confirmCurrentUrl(`${ config.baseUrl }BankingProject/#/login`);
  }

  public async confirmRedirectToCustomerLogin(): Promise<void> {
    await this.confirmCurrentUrl(`${ config.baseUrl }BankingProject/#/customer`);
    await this.confirmDefaultRegisteredUserOption();
  }

  public async confirmDefaultRegisteredUserOption(): Promise<void> {
    expect(await customer.content.userSelect.getCurrentOptionText()).toEqual('---Your Name---');
  }

  protected async confirmCurrentUrl(url: string): Promise<void> {
    expect(await this.page.getCurrentUrl()).toEqual(url);
  }

  private async confirmCommonHeaderDetails(): Promise<void> {
    expect(await this.page.header.getHeadingText()).toEqual('XYZ Bank');
    expect(await this.page.header.getHeadingTextColour()).toEqual(RgbaColour.LightGrey);
    expect(await this.page.header.getBackgroundColour()).toEqual(RgbaColour.MidGrey);
    expect(await this.page.header.getBorderColour()).toEqual(RgbColour.DarkGrey);
    expect(await this.page.header.homeButton.getText()).toEqual('Home');
    expect(await this.page.header.homeButton.getTextColour()).toEqual(RgbaColour.DarkGrey);
    expect(await this.page.header.homeButton.getBackgroundColour()).toEqual(RgbaColour.LightGrey);
    expect(await this.page.header.homeButton.getBorderColour()).toEqual(RgbaColour.White);
  }

}
