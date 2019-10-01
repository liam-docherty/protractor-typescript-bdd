import {
  by,
  element,
  ElementFinder,
} from 'protractor';
import { ButtonAtom } from '../../atoms/button-atom.po';

export class Header {

  public readonly homeButton: ButtonAtom;

  private readonly header: ElementFinder = element(by.className('box mainhdr'));
  private readonly heading: ElementFinder = this.header.element(by.className('mainHeading'));

  constructor() {
    this.homeButton = new ButtonAtom(this.header.element(by.className('btn home')));
  }

  public async getHeadingText(): Promise<string> {
    return await this.heading.getText();
  }

}
