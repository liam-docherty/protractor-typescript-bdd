import {
  by,
  element,
  ElementFinder,
} from 'protractor';
import { ButtonAtom } from '../../atoms/button-atom.po';

export class Header {

  public readonly homeButton: ButtonAtom;
  public readonly logoutButton: ButtonAtom;

  private readonly header: ElementFinder = element(by.className('box mainhdr'));
  private readonly heading: ElementFinder = this.header.element(by.className('mainHeading'));

  constructor() {
    this.homeButton = new ButtonAtom(this.header.element(by.className('btn home')));
    this.logoutButton = new ButtonAtom(this.header.element(by.className('btn logout')));
  }

  public async getHeadingText(): Promise<string> {
    return await this.heading.getText();
  }

  public async getHeadingTextColour(): Promise<string> {
    return await this.heading.getCssValue('color');
  }

  public async getBackgroundColour(): Promise<string> {
    return await this.header.getCssValue('background-color');
  }

  public async getBorderColour(): Promise<string> {
    return await this.header.getCssValue('border-color');
  }

}
