import {
  by,
  ElementFinder,
} from 'protractor';
import { BaseAtom } from './base-atom.po';

export class FormGroupAtom extends BaseAtom {

  private readonly label: ElementFinder = this.formGroup.element(by.tagName('label'));
  private readonly error: ElementFinder = this.formGroup.element(by.tagName('span'));

  constructor(protected readonly formGroup: ElementFinder) {
    super();
  }

  public async getLabelText(): Promise<string> {
    return await this.label.getText();
  }

}
