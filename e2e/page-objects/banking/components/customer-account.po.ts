import {
  by,
  ElementFinder,
} from 'protractor';
import { Panel } from './panel.po';

export class CustomerAccount extends Panel {

  public readonly accountSelect;

  // TODO: There are multiple strong tags. Need to look for a better way to find welcome.
  //  Otherwise we get multiple element warnings
  private readonly welcome: ElementFinder = this.box.element(by.tagName('strong'));
  private readonly customerName: ElementFinder = this.welcome.element(by.tagName('span'));

  public async getWelcomeMessageText(): Promise<string> {
    return await this.welcome.getText();
  }

  public async getWelcomeMessageFontSize(): Promise<string> {
    return await this.welcome.getCssValue('font-size');
  }

  public async getCustomerNameFontSize(): Promise<string> {
    return await this.customerName.getCssValue('font-size');
  }

}
