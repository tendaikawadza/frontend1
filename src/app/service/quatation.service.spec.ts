import { TestBed } from '@angular/core/testing';

import { QuatationService } from './quatation.service';

describe('QuatationService', () => {
  let service: QuatationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuatationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
