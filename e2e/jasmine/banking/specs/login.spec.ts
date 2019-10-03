import { LoginFlow } from '../flows/login.flow';

const flow: LoginFlow = new LoginFlow();

describe('Banking Login >', () => {
  beforeEach(async () => {
    await flow.goToLogin();
  });

  it('should reflect that user is not yet logged in header', async () => {
    await flow.confirmNotLoggedInHeaderDetails();
  });

  it('should include a panel to hold page details', async () => {
    await flow.confirmContentPanelDetails();
  });

  it('should include options for Customer and Bank Manager login', async () => {
    await flow.confirmLoginOptions();
  });
});
