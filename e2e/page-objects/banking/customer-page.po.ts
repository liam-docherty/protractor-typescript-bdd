import { BasePage } from './base-page.po';
import { Customer } from './components/customer.po';

export class CustomerPage extends BasePage {

  public readonly content: Customer;

  constructor() {
    super();
    this.content = new Customer();
  }

}
