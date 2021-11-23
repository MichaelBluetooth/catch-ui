import { TestBed } from '@angular/core/testing';

import { HzfunctionResolver } from './hzfunction.resolver';

describe('HzfunctionResolver', () => {
  let resolver: HzfunctionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HzfunctionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
