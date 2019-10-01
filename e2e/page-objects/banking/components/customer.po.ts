import {
  by,
  element,
} from 'protractor';
import { ButtonAtom } from '../../atoms/button-atom.po';

export class Customer {

  public readonly loginButton: ButtonAtom;

  constructor() {
    this.loginButton = new ButtonAtom(element(by.tagName('button')));
  }

}
