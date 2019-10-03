import { LoginFlow } from '../flows/login.flow';

const flow: LoginFlow = new LoginFlow();

describe('Customer Login >', () => {
  beforeEach(async () => {
    await flow.goToLogin();
  });

  it('should ', async () => {
    await flow.confirmPageDetails();
  });
});
