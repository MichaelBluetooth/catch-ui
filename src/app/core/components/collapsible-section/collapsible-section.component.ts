import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collapsible-section',
  templateUrl: './collapsible-section.component.html',
  styleUrls: ['./collapsible-section.component.less']
})
export class CollapsibleSectionComponent {

  @Input() collapsed = true;
  @Input() showPlusIcon = false;
  @Input() showGearIcon = false;

  @Output() plusClicked = new EventEmitter();
  @Output() gearClicked = new EventEmitter();

  toggle(): void {
    this.collapsed = !this.collapsed;
  }
}
