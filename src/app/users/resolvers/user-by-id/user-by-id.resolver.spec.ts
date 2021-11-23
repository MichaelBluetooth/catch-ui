import { TestBed } from '@angular/core/testing';

import { UserByIdResolver } from './user-by-id.resolver';

describe('UserByIdResolver', () => {
  let resolver: UserByIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserByIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
