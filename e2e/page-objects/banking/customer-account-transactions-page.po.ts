import { BasePage } from './base-page.po';
import { CustomerAccountTransactions } from './components/customer-account-transactions.po';

export class CustomerAccountTransactionsPage extends BasePage {

  public readonly content: CustomerAccountTransactions;

  constructor() {
    super();
    this.content = new CustomerAccountTransactions();
  }

}
