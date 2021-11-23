import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDatesSectionComponent } from './issue-dates-section.component';

describe('IssueDatesSectionComponent', () => {
  let component: IssueDatesSectionComponent;
  let fixture: ComponentFixture<IssueDatesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueDatesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDatesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
