import { TestBed } from '@angular/core/testing';

import { CdbCalculationService } from './cdb-calculation.service';

describe('CdbCalculationService', () => {
  let service: CdbCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdbCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
