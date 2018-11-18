import { TestBed } from '@angular/core/testing';

import { ProInfoService } from './pro-info.service';

describe('ProInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProInfoService = TestBed.get(ProInfoService);
    expect(service).toBeTruthy();
  });
});
