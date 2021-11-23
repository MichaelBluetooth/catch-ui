import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HzFunctionsListComponent } from './hz-functions-list.component';

describe('HzFunctionsListComponent', () => {
  let component: HzFunctionsListComponent;
  let fixture: ComponentFixture<HzFunctionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HzFunctionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HzFunctionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
