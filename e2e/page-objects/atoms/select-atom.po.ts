import {
  by,
  ElementArrayFinder,
  ElementFinder,
} from 'protractor';
import { BaseAtom } from './base-atom.po';

export class SelectAtom extends BaseAtom {

  private readonly options: ElementArrayFinder = this.select.all(by.tagName('option'));
  private readonly currentOption: ElementFinder = this.select.element(by.css('option:checked'));

  constructor(private readonly select: ElementFinder) {
    super();
  }

  public async getCurrentOptionText(): Promise<string> {
    return await this.currentOption.getText();
  }

  public async clickMenu(): Promise<void> {
    await this.select.click();
  }

  public async getOptionsCount(): Promise<number> {
    return await this.options.count();
  }

  public async getOptionTextByIndex(index: number): Promise<string> {
    return await this.options.get(index).getText();
  }

  public async clickOptionByIndex(index: number): Promise<void> {
    await this.options.get(index).click();
  }

}
