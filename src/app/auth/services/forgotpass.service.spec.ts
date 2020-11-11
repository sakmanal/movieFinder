import { TestBed } from '@angular/core/testing';

import { ForgotpassService } from './forgotpass.service';

describe('ForgotpassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForgotpassService = TestBed.get(ForgotpassService);
    expect(service).toBeTruthy();
  });
});
