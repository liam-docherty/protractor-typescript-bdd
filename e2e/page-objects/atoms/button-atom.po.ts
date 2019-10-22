import { ElementFinder } from 'protractor';
import { BaseAtom } from './base-atom.po';

export class ButtonAtom extends BaseAtom {

  constructor(private readonly button: ElementFinder) {
    super();
  }

  public async click(): Promise<void> {
    await this.button.click();
  }

  public async isPresent(): Promise<boolean> {
    return await this.button.isPresent();
  }

  public async isVisible(): Promise<boolean> {
    return await this.button.isDisplayed();
  }

  public async isDisabled(): Promise<boolean> {
    return !(await this.button.isEnabled());
  }

  public async getText(): Promise<string> {
    return await this.button.getText();
  }

  public async getBackgroundColour(): Promise<string> {
    return await this.button.getCssValue('background-color');
  }

  public async getBorderColour(): Promise<string> {
    return await this.button.getCssValue('border-color');
  }

  public async getTextColour(): Promise<string> {
    return await this.button.getCssValue('color');
  }

  public async isSelected(): Promise<boolean> {
    return await this.hasClass(this.button, 'btn-primary');
  }

}
