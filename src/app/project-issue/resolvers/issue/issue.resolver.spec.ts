import { TestBed } from '@angular/core/testing';

import { IssueResolver } from './issue.resolver';

describe('IssueResolver', () => {
  let resolver: IssueResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IssueResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
