import { Component, Input, OnInit } from '@angular/core';
import { ProjectIssue } from '../../models/project-issue';

@Component({
  selector: 'app-issue-dates-section',
  templateUrl: './issue-dates-section.component.html',
  styleUrls: ['./issue-dates-section.component.less']
})
export class IssueDatesSectionComponent {
  @Input() issue: ProjectIssue  
}
