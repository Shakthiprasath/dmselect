import { TestBed } from '@angular/core/testing';

import { TesingLibService } from './tesing-lib.service';

describe('TesingLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesingLibService = TestBed.get(TesingLibService);
    expect(service).toBeTruthy();
  });
});
