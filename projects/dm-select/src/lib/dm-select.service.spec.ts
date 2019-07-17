import { TestBed } from '@angular/core/testing';

import { DmSelectService } from './dm-select.service';

describe('DmSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DmSelectService = TestBed.get(DmSelectService);
    expect(service).toBeTruthy();
  });
});
