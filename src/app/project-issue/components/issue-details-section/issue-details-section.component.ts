import { Component, Input, OnInit } from '@angular/core';
import { ProjectIssue } from '../../models/project-issue';

@Component({
  selector: 'app-issue-details-section',
  templateUrl: './issue-details-section.component.html',
  styleUrls: ['./issue-details-section.component.less'],
})
export class IssueDetailsSectionComponent {
  @Input() issue: ProjectIssue;
}
