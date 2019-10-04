import {
  by,
  ElementArrayFinder,
} from 'protractor';
import { ButtonAtom } from '../../atoms/button-atom.po';
import { SelectFormGroupAtom } from '../../atoms/select-form-group-atom.po';
import { Panel } from './panel.po';

export class CustomerLogin extends Panel {

  public readonly userSelect: SelectFormGroupAtom;
  public readonly loginButton: ButtonAtom;

  private readonly formGroups: ElementArrayFinder = this.box.all(by.className('form-group'));

  constructor() {
    super();
    this.userSelect = new SelectFormGroupAtom(this.formGroups.get(0));
    this.loginButton = new ButtonAtom(this.box.element(by.tagName('button')));
  }

}
