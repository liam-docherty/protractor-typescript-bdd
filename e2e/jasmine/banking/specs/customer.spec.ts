import { CustomerFlow } from '../flows/customer.flow';

const flow: CustomerFlow = new CustomerFlow();

describe('Banking Login >', () => {
  beforeEach(async () => {
    await flow.goToCustomerLogin();
  });

  it('should ', async () => {
    await flow.confirmPageDetails();
  });
});
