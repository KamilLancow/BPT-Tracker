import { TestBed } from '@angular/core/testing';

import { BPTService } from './bpt.service';

describe('BPTService', () => {
  let service: BPTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BPTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
