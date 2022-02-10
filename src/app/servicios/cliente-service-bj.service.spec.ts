import { TestBed } from '@angular/core/testing';

import { ClienteServiceBJService } from './cliente-service-bj.service';

describe('ClienteServiceBJService', () => {
  let service: ClienteServiceBJService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteServiceBJService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
