import { Customer } from './components/customer.po';
import { Header } from './components/header.po';

export class CustomerPage {

  public readonly header: Header;
  public readonly content: Customer;

  constructor() {
    this.header = new Header();
    this.content = new Customer();
  }

}
