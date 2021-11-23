import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleSectionComponent } from './collapsible-section.component';
import { By } from '@angular/platform-browser';

describe('CollapsibleSectionComponent', () => {
  let component: CollapsibleSectionComponent;
  let fixture: ComponentFixture<CollapsibleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsibleSectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Toggling the collapsible content', () => {
    it('should not show the section content when collapsed', () => {
      expect(fixture.debugElement.query(By.css('.section-content'))).toBeFalsy();
    });

    it('should show the section content when not collapsed', () => {
      fixture.debugElement.query(By.css('.toggle-btn')).nativeElement.click();
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.section-content'))).toBeTruthy();
    });
  });

  describe('The plus icon', () => {
    it('is visible when showPlusIcon=true', () => {
      component.showPlusIcon = true;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.plus-btn'))).toBeTruthy();
    });

    it('is visible when showPlusIcon=false', () => {
      component.showPlusIcon = false;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.plus-btn'))).toBeFalsy();
    });

    it('emits the event when clicked', () => {
      spyOn(component.plusClicked, 'emit');
      component.showPlusIcon = true;
      fixture.detectChanges();
      fixture.debugElement.query(By.css('.plus-btn')).nativeElement.click();
      expect(component.plusClicked.emit).toHaveBeenCalled();
    });
  });
});
