import {
  by,
  element,
  ElementArrayFinder,
  ElementFinder,
} from 'protractor';
import { ButtonAtom } from '../../atoms/button-atom.po';
import { SelectFormGroupAtom } from '../../atoms/select-form-group-atom.po';

export class Customer {

  public readonly userSelect: SelectFormGroupAtom;
  public readonly loginButton: ButtonAtom;

  private readonly content: ElementFinder = element(by.className('borderM box padT20 ng-scope'));
  private readonly formGroups: ElementArrayFinder = this.content.all(by.className('form-group'));

  constructor() {
    this.userSelect = new SelectFormGroupAtom(this.formGroups.get(0));
    this.loginButton = new ButtonAtom(this.content.element(by.tagName('button')));
  }

}
