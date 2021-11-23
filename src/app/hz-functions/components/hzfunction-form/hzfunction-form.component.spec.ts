import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HzfunctionFormComponent } from './hzfunction-form.component';

describe('HzfunctionFormComponent', () => {
  let component: HzfunctionFormComponent;
  let fixture: ComponentFixture<HzfunctionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HzfunctionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HzfunctionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
