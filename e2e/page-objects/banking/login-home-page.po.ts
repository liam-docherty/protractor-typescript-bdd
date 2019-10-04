import { BasePage } from './base-page.po';
import { LoginHome } from './components/login-home.po';

export class LoginHomePage extends BasePage {

  public readonly content: LoginHome;

  constructor() {
    super();
    this.content = new LoginHome();
  }

}
