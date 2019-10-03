import { browser } from 'protractor';
import { Header } from './components/header.po';
import { Panel } from './components/panel.po';

export class BasePage {

  public readonly header: Header;
  public readonly panel: Panel;

  constructor() {
    this.header = new Header();
    this.panel = new Panel();
  }

  public async getCurrentUrl(): Promise<string> {
    return await browser.getCurrentUrl();
  }

}
