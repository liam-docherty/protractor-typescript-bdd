import {
  by,
  element,
  ElementFinder,
} from 'protractor';

export class Panel {

  protected readonly box: ElementFinder = element(by.className('box padT20'));

  public async getBoxBackgroundColour(): Promise<string> {
    return await this.box.getCssValue('background-color');
  }

  public async getBorderColour(): Promise<string> {
    return await this.box.getCssValue('border-color');
  }

}
