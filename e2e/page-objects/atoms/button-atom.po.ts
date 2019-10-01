import { ElementFinder } from 'protractor';
import { BaseAtom } from './base-atom.po';

export class ButtonAtom extends BaseAtom {

  constructor(private readonly button: ElementFinder) {
    super();
  }

  // TODO: Look for a way to move these to the BaseAtom class
  public async click(): Promise<void> {
    await this.button.click();
  }

  public async isEnabled(): Promise<boolean> {
    return await this.button.isEnabled();
  }

  public async getText(): Promise<string> {
    return await this.button.getText();
  }

}
