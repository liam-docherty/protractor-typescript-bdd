import { BasePage } from '../../../page-objects/banking/base-page.po';
import { Colour } from '../../../support/enums/colour.enum';

export class BaseFlow {

  private readonly page: BasePage;

  constructor(page: BasePage) {
    this.page = page;
  }

  public async confirmNotLoggedInHeaderDetails(): Promise<void> {
    expect(await this.page.header.getHeadingText()).toEqual('XYZ Bank');
    expect(await this.page.header.getHeadingTextColour()).toEqual(Colour.LightGrey);
    expect(await this.page.header.getBackgroundColour()).toEqual(Colour.MidGrey);
    expect(await this.page.header.getBorderColour()).toEqual(Colour.DarkGreyNoOpacity);
    expect(await this.page.header.homeButton.getText()).toEqual('Home');
    expect(await this.page.header.homeButton.isDisabled()).toBe(false, 'Is home button enabled?');
    expect(await this.page.header.homeButton.getTextColour()).toEqual(Colour.DarkGrey);
    expect(await this.page.header.homeButton.getBackgroundColour()).toEqual(Colour.LightGrey);
    expect(await this.page.header.homeButton.getBorderColour()).toEqual(Colour.White);
    expect(await this.page.header.logoutButton.isVisible()).toBe(false, 'Is logout button visible?');
  }

}
