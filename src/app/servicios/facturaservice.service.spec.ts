import { TestBed } from '@angular/core/testing';

import { FacturaserviceService } from './facturaservice.service';

describe('FacturaserviceService', () => {
  let service: FacturaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
