import { TestBed, inject } from '@angular/core/testing';

import { GrantDetailsService } from './grant-details.service';

describe('GrantDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrantDetailsService]
    });
  });

  it('should be created', inject([GrantDetailsService], (service: GrantDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
