import { BasePage } from './base-page.po';
import { Login } from './components/login.po';

export class LoginPage extends BasePage {

  public readonly content: Login;

  constructor() {
    super();
    this.content = new Login();
  }

}
