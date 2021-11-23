import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowBtnComponent } from './workflow-btn.component';

describe('WorkflowBtnComponent', () => {
  let component: WorkflowBtnComponent;
  let fixture: ComponentFixture<WorkflowBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
