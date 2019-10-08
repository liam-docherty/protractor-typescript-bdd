import {
  by,
  ElementFinder,
} from 'protractor';
import { FormGroupAtom } from './form-group-atom.po';

export class InputFormGroupAtom extends FormGroupAtom {

  private readonly input: ElementFinder = this.formGroup.element(by.tagName('input'));

  public async isPresent(): Promise<boolean> {
    return await this.input.isPresent();
  }

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

  public async isRequired(): Promise<boolean> {
    return await this.hasClass(this.input,'ng-invalid-required');
  }

  public async isInvalid(): Promise<boolean> {
    return await this.hasClass(this.input, 'ng-invalid');
  }

  public async getValidationMessageText(): Promise<string> {
    return await this.input.getAttribute('validationMessage');
  }

}
