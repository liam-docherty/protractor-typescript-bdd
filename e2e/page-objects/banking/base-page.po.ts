import { browser } from 'protractor';
import { ContentPanel } from './components/content-panel.po';
import { Header } from './components/header.po';

export class BasePage {

  public readonly header: Header;
  public readonly panel: ContentPanel;

  constructor() {
    this.header = new Header();
    this.panel = new ContentPanel();
  }

  public async getCurrentUrl(): Promise<string> {
    return await browser.getCurrentUrl();
  }

}
