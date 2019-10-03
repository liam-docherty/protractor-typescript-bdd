import {
  by,
  ElementArrayFinder,
  ElementFinder,
} from 'protractor';
import { FormGroupAtom } from './form-group-atom.po';

export class SelectFormGroupAtom extends FormGroupAtom {

  private readonly select: ElementFinder = this.formGroup.element(by.tagName('select'));
  private readonly options: ElementArrayFinder = this.select.all(by.tagName('option'));
  private readonly currentOption: ElementFinder = this.select.element(by.css('option:checked'));

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
