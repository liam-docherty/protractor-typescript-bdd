import { CustomerAccountPage } from '../../../page-objects/banking/customer-account-page.po';
import { BaseFlow } from './base.flow';

const account: CustomerAccountPage = new CustomerAccountPage();

export class CustomerAccountFlow extends BaseFlow {

  constructor() {
    super(account);
  }

}
