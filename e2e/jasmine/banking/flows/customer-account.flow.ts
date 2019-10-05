import { CustomerAccountPage } from '../../../page-objects/banking/customer-account-page.po';
import { BaseFlow } from './base.flow';
import { User } from '../support/interfaces/user';

const account: CustomerAccountPage = new CustomerAccountPage();

export class CustomerAccountFlow extends BaseFlow {

  constructor() {
    super(account);
  }

}
