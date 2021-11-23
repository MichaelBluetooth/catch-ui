import { Component, Input, OnInit } from '@angular/core';
import { ProjectIssue } from '../../models/project-issue';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-workflow-btn',
  templateUrl: './workflow-btn.component.html',
  styleUrls: ['./workflow-btn.component.less']
})
export class WorkflowBtnComponent implements OnInit {

  @Input() issue: ProjectIssue;

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
  }

  updateStatus(status: string): void {
    this.issueService.updateStatus(this.issue.id, status);
  }

}
