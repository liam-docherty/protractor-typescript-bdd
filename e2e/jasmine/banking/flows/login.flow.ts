import { browser } from 'protractor';
import { LoginPage } from '../../../page-objects/banking/login-page.po';
import { RgbColour } from '../../../support/enums/rgb-colour.enum';
import { RgbaColour } from '../../../support/enums/rgba-colour.enum';
import { BaseFlow } from './base.flow';

const login: LoginPage = new LoginPage();

export class LoginFlow extends BaseFlow {

  constructor() {
    super(login);
  }

  public async goToLogin(): Promise<void> {
    await browser.get('BankingProject/#/login');
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

}
