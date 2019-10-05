import {
  by,
  ElementArrayFinder,
  ElementFinder,
} from 'protractor';
import { SelectAtom } from '../../atoms/select-atom.po';
import { Panel } from './panel.po';

export class CustomerAccount extends Panel {

  public readonly accountSelect: SelectAtom;
  // TODO: There are multiple strong tags. Need to look for a better way to find welcome.
  //  Otherwise we get multiple element warnings
  private readonly welcome: ElementFinder = this.box.element(by.tagName('strong'));
  private readonly customerName: ElementFinder = this.welcome.element(by.tagName('span'));
  private readonly centers: ElementArrayFinder = this.box.all(by.className('center'));
  private readonly accountDetails: ElementFinder = this.centers.get(0);

  constructor() {
    super();
    this.accountSelect = new SelectAtom(this.box.element(by.model('accountNo')));
  }

  public async getWelcomeMessageText(): Promise<string> {
    return await this.welcome.getText();
  }

  public async getWelcomeMessageFontSize(): Promise<string> {
    return await this.welcome.getCssValue('font-size');
  }

  public async getCustomerNameFontSize(): Promise<string> {
    return await this.customerName.getCssValue('font-size');
  }

  public async getAccountDetailsText(): Promise<string> {
    return await this.accountDetails.getText();
  }

}
