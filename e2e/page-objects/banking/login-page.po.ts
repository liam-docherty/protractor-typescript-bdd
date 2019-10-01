import { Header } from './components/header.po';
import { Login } from './components/login.po';

export class LoginPage {

  public readonly header: Header;
  public readonly content: Login;

  constructor() {
    this.header = new Header();
    this.content = new Login();
  }

}
