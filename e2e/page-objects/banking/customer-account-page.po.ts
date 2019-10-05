import { BasePage } from './base-page.po';
import { CustomerAccount } from './components/customer-account.po';

export class CustomerAccountPage extends BasePage {

  public readonly content: CustomerAccount;

  constructor() {
    super();
    this.content = new CustomerAccount();
  }

}
