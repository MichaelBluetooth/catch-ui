import { Component, Input } from '@angular/core';
import { ProjectIssue } from '../../models/project-issue';

@Component({
  selector: 'app-issue-people-section',
  templateUrl: './issue-people-section.component.html',
  styleUrls: ['./issue-people-section.component.less'],
})
export class IssuePeopleSectionComponent {
  @Input() issue: ProjectIssue;
}
