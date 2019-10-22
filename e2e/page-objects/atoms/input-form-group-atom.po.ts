import {
  by,
  ElementFinder,
} from 'protractor';
import { FormGroupAtom } from './form-group-atom.po';
import { InputAtom } from './input-atom.po';

export class InputFormGroupAtom extends FormGroupAtom {

  public readonly input: InputAtom;

  constructor(protected readonly formGroup: ElementFinder) {
    super(formGroup);
    this.input = new InputAtom(this.formGroup.element(by.tagName('input')));
  }

}
