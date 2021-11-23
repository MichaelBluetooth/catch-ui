import { Component, Input } from '@angular/core';
import { ProjectIssue } from '../../models/project-issue';

@Component({
  selector: 'app-issue-comments',
  templateUrl: './issue-comments.component.html',
  styleUrls: ['./issue-comments.component.less'],
})
export class IssueCommentsComponent {
  @Input() issue: ProjectIssue;
}
