import {
  by,
  element,
  ElementArrayFinder,
  ElementFinder,
} from 'protractor';
import { ButtonAtom } from '../../atoms/button-atom.po';
import { ContentPanel } from './content-panel.po';

export class CustomerAccountTransactions extends ContentPanel {

  public readonly backButton: ButtonAtom;
  public readonly resetButton: ButtonAtom;

  private readonly topMenu: ElementFinder = element(by.className('fixedTopBox'));
  private readonly topMenuButtons: ElementArrayFinder = this.topMenu.all(by.className('btn'));

  constructor() {
    super();
    this.backButton = new ButtonAtom(this.topMenuButtons.get(0));
    this.resetButton = new ButtonAtom(this.topMenuButtons.get(1));
  }

}
