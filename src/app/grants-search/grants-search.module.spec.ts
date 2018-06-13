import { GrantsSearchModule } from './grants-search.module';

describe('GrantsSearchModule', () => {
  let grantsSearchModule: GrantsSearchModule;

  beforeEach(() => {
    grantsSearchModule = new GrantsSearchModule();
  });

  it('should create an instance', () => {
    expect(grantsSearchModule).toBeTruthy();
  });
});
