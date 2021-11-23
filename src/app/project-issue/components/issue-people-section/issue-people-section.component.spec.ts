import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuePeopleSectionComponent } from './issue-people-section.component';

describe('IssuePeopleSectionComponent', () => {
  let component: IssuePeopleSectionComponent;
  let fixture: ComponentFixture<IssuePeopleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuePeopleSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuePeopleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
