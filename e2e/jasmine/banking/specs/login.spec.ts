import { LoginFlow } from '../flows/login.flow';

const flow: LoginFlow = new LoginFlow();

describe('Banking Login >', () => {
  beforeEach(async () => {
    await flow.goToLogin();
  });

  it('should ', async () => {
    await flow.confirmPageDetails();
  });
});
