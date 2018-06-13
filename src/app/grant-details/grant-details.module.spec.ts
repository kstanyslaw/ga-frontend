import { GrantDetailsModule } from './grant-details.module';

describe('GrantDetailsModule', () => {
  let grantDetailsModule: GrantDetailsModule;

  beforeEach(() => {
    grantDetailsModule = new GrantDetailsModule();
  });

  it('should create an instance', () => {
    expect(grantDetailsModule).toBeTruthy();
  });
});
