import {
  by,
  ElementArrayFinder,
} from 'protractor';
import { ButtonAtom } from '../../atoms/button-atom.po';
import { Panel } from './panel.po';

export class LoginHome extends Panel {

  public readonly customerLoginButton: ButtonAtom;
  public readonly managerLoginButton: ButtonAtom;

  private readonly buttons: ElementArrayFinder = this.box.all(by.tagName('button'));

  constructor() {
    super();
    this.customerLoginButton = new ButtonAtom(this.buttons.get(0));
    this.managerLoginButton = new ButtonAtom(this.buttons.get(1));
  }

}
