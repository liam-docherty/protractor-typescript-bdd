import {
  by,
  element,
  ElementArrayFinder,
  ElementFinder,
} from 'protractor';
import { ButtonAtom } from '../../atoms/button-atom.po';

export class Login {

  public readonly customerLoginButton: ButtonAtom;
  public readonly managerLoginButton: ButtonAtom;

  private readonly content: ElementFinder = element(by.className('borderM box padT20'));
  private readonly buttons: ElementArrayFinder = this.content.all(by.tagName('button'));

  constructor() {
    this.customerLoginButton = new ButtonAtom(this.buttons.get(0));
    this.managerLoginButton = new ButtonAtom(this.buttons.get(1));
  }

}
