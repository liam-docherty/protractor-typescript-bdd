import { browser } from 'protractor';
import { LoginHomePage } from '../../../page-objects/banking/login-home-page.po';
import { config } from '../../config';
import { RgbColour } from '../support/enums/rgb-colour.enum';
import { RgbaColour } from '../support/enums/rgba-colour.enum';
import { BaseFlow } from './base.flow';

const login: LoginHomePage = new LoginHomePage();

export class LoginHomeFlow extends BaseFlow {

  constructor() {
    super(login);
  }

  public async goToLoginHome(): Promise<void> {
    await browser.get('BankingProject/#/login');
  }

  public async selectCustomerLoginOption(): Promise<void> {
    await login.content.customerLoginButton.click();
  }

  public async selectBankManagerLoginOption(): Promise<void> {
    await login.content.managerLoginButton.click();
  }

  public async confirmLoginOptions(): Promise<void> {
    expect(await login.content.customerLoginButton.getText()).toEqual('Customer Login');
    expect(await login.content.customerLoginButton.getTextColour()).toEqual(RgbaColour.LightGrey);
    expect(await login.content.customerLoginButton.getBackgroundColour()).toEqual(RgbaColour.MidBlue);
    expect(await login.content.customerLoginButton.getBorderColour()).toEqual(RgbColour.DarkBlue);
    expect(await login.content.managerLoginButton.getText()).toEqual('Bank Manager Login');
    expect(await login.content.managerLoginButton.getTextColour()).toEqual(RgbaColour.LightGrey);
    expect(await login.content.managerLoginButton.getBackgroundColour()).toEqual(RgbaColour.MidBlue);
    expect(await login.content.managerLoginButton.getBorderColour()).toEqual(RgbColour.DarkBlue);
  }

  public async confirmRedirectToCustomerLogin(): Promise<void> {
    await this.confirmCurrentUrl(`${ config.baseUrl }BankingProject/#/customer`);
  }

  public async confirmRedirectToBankManagerLogin(): Promise<void> {
    await this.confirmCurrentUrl(`${ config.baseUrl }BankingProject/#/manager`);
  }

}
