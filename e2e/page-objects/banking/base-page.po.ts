import { Header } from './components/header.po';

export class BasePage {

  public readonly header: Header;

  constructor() {
    this.header = new Header();
  }

}
