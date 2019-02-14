import { TestBed } from '@angular/core/testing';

import { HostserviceService } from './hostservice.service';

describe('HostserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostserviceService = TestBed.get(HostserviceService);
    expect(service).toBeTruthy();
  });
});
