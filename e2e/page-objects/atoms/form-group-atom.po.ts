import {
  by,
  ElementFinder,
} from 'protractor';
import { BaseAtom } from './base-atom.po';

export class FormGroupAtom extends BaseAtom {

  // TODO: This only works for textbox fields at the moment. Will need to reassess when we have other field types
  private readonly label: ElementFinder = this.formGroup.element(by.tagName('label'));
  private readonly input: ElementFinder = this.formGroup.element(by.tagName('input'));
  private readonly error: ElementFinder = this.formGroup.element(by.tagName('span'));

  constructor(private readonly formGroup: ElementFinder) {
    super();
  }

  public async getLabelText(): Promise<string> {
    return await this.label.getText();
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

}
