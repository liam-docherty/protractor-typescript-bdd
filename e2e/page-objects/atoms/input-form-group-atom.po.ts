import {
  by,
  ElementFinder,
} from 'protractor';
import { FormGroupAtom } from './form-group-atom.po';

export class InputFormGroupAtom extends FormGroupAtom {

  private readonly input: ElementFinder = this.formGroup.element(by.tagName('input'));

  public async enterText(text: string): Promise<void> {
    await this.input.sendKeys(text);
  }

  public async getPlaceholderText(): Promise<string> {
    return await this.input.getAttribute('placeholder');
  }

  public async getType(): Promise<string> {
    return await this.input.getAttribute('type');
  }

  public async getInputValue(): Promise<string> {
    return await this.input.getAttribute('value');
  }

}