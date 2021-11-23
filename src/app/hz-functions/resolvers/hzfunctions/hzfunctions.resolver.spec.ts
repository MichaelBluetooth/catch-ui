import { TestBed } from '@angular/core/testing';

import { HzfunctionsResolver } from './hzfunctions.resolver';

describe('HzfunctionsResolver', () => {
  let resolver: HzfunctionsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HzfunctionsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
