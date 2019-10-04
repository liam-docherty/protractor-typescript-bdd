import { BasePage } from './base-page.po';
import { CustomerLogin } from './components/customer-login.po';

export class CustomerLoginPage extends BasePage {

  public readonly content: CustomerLogin;

  constructor() {
    super();
    this.content = new CustomerLogin();
  }

}
