import { TestBed } from '@angular/core/testing';

import { HinkingsService } from './hinkings.service';

describe('HinkingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HinkingsService = TestBed.get(HinkingsService);
    expect(service).toBeTruthy();
  });
});
