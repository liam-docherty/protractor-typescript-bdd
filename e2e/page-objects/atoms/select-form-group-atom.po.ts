import {
  by,
  ElementFinder,
} from 'protractor';
import { FormGroupAtom } from './form-group-atom.po';
import { SelectAtom } from './select-atom.po';

export class SelectFormGroupAtom extends FormGroupAtom {

  public readonly select: SelectAtom;

  constructor(protected readonly formGroup: ElementFinder) {
    super(formGroup);
    this.select = new SelectAtom(this.formGroup.element(by.tagName('select')));
  }

}
