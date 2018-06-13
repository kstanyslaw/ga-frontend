import { TestBed, inject } from '@angular/core/testing';

import { ManualyAddService } from './manualy-add.service';

describe('ManualyAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManualyAddService]
    });
  });

  it('should be created', inject([ManualyAddService], (service: ManualyAddService) => {
    expect(service).toBeTruthy();
  }));
});
