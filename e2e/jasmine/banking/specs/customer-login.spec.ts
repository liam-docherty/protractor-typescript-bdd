import { CustomerLoginFlow } from '../flows/customer-login.flow';
import { harryPotter } from '../support/constants/users';

const flow: CustomerLoginFlow = new CustomerLoginFlow();

describe('Banking - Customer Login >', () => {
  beforeEach(async () => {
    await flow.goToCustomerLogin();
  });

  it('should reflect that user is not yet logged in header', async () => {
    await flow.confirmNotLoggedInHeaderDetails();
  });

  it('should include a panel to hold page specific content', async () => {
    await flow.confirmContentPanelDetails();
  });

  it('should redirect to the Login home page when selecting Home option', async () => {
    await flow.selectHomeOption();
    await flow.confirmRedirectToLoginHome();
  });

  it('should include a default option before user selects their option', async () => {
    await flow.confirmDefaultRegisteredUserOption();
    await flow.confirmLoginOptionIsNotAvailable();
  });

  it('should include the list of registered users to allow user to select from', async () => {
    await flow.confirmRegisteredUserList();
  });

  it('should allow the user to login once a registered user has been selected', async () => {
    await flow.selectRegisteredUser(harryPotter);
    await flow.confirmLoginOptionIsAvailable();
  });

  it('should not allow the user to login if they switch selection from a registered user back to the default option', async () => {
    await flow.selectRegisteredUser(harryPotter);
    await flow.selectDefaultRegisteredUserOption();
    await flow.confirmLoginOptionIsNotAvailable();
  });
});
