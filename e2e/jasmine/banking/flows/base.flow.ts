import { BasePage } from '../../../page-objects/banking/base-page.po';
import { config } from '../../config';
import { RgbColour } from '../support/enums/rgb-colour.enum';
import { RgbaColour } from '../support/enums/rgba-colour.enum';

export class BaseFlow {

  private readonly page: BasePage;

  constructor(page: BasePage) {
    this.page = page;
  }

  public async selectHomeOption(): Promise<void> {
    await this.page.header.homeButton.click();
  }

  public async confirmNotLoggedInHeaderDetails(): Promise<void> {
    expect(await this.page.header.getHeadingText()).toEqual('XYZ Bank');
    expect(await this.page.header.getHeadingTextColour()).toEqual(RgbaColour.LightGrey);
    expect(await this.page.header.getBackgroundColour()).toEqual(RgbaColour.MidGrey);
    expect(await this.page.header.getBorderColour()).toEqual(RgbColour.DarkGrey);
    expect(await this.page.header.homeButton.getText()).toEqual('Home');
    expect(await this.page.header.homeButton.isDisabled()).toBe(false, 'Is home button enabled?');
    expect(await this.page.header.homeButton.getTextColour()).toEqual(RgbaColour.DarkGrey);
    expect(await this.page.header.homeButton.getBackgroundColour()).toEqual(RgbaColour.LightGrey);
    expect(await this.page.header.homeButton.getBorderColour()).toEqual(RgbaColour.White);
    expect(await this.page.header.logoutButton.isVisible()).toBe(false, 'Is logout button visible?');
  }

  public async confirmContentPanelDetails(): Promise<void> {
    expect(await this.page.panel.getBoxBackgroundColour()).toEqual(RgbaColour.LightGrey);
    expect(await this.page.panel.getBorderColour()).toEqual(RgbColour.LightGrey);
  }

  public async confirmRedirectToLoginHome(): Promise<void> {
    await this.confirmCurrentUrl(`${ config.baseUrl }BankingProject/#/login`);
  }

  protected async confirmCurrentUrl(url: string): Promise<void> {
    expect(await this.page.getCurrentUrl()).toEqual(url);
  }

}
