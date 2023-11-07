import { TestBed } from '@angular/core/testing';

import { InterceptorauthService } from './interceptorauth.service';

describe('InterceptorauthService', () => {
  let service: InterceptorauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
