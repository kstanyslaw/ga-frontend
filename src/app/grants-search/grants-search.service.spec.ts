import { TestBed, inject } from '@angular/core/testing';

import { GrantsSearchService } from './grants-search.service';

describe('GrantsSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrantsSearchService]
    });
  });

  it('should be created', inject([GrantsSearchService], (service: GrantsSearchService) => {
    expect(service).toBeTruthy();
  }));
});
