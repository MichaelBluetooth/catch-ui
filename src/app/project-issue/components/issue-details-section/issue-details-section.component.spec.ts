import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetailsSectionComponent } from './issue-details-section.component';

describe('IssueDetailsSectionComponent', () => {
  let component: IssueDetailsSectionComponent;
  let fixture: ComponentFixture<IssueDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueDetailsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
