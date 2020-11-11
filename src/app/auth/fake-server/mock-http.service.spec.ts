import { TestBed } from '@angular/core/testing';

import { MockHttpService } from './mock-http.service';

describe('MockHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockHttpService = TestBed.get(MockHttpService);
    expect(service).toBeTruthy();
  });
});
