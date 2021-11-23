import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { of } from 'rxjs';
import { ProjectIssue } from '../../models/project-issue';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.less'],
})
export class EditIssueComponent implements OnInit {
  @Input() issue: ProjectIssue;

  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  userOptions$ = of([]);
  issueForm: FormGroup = new FormGroup({
    projectid: new FormControl(null),
    status: new FormControl(null, Validators.required),
    issue_title: new FormControl(null, Validators.required),
    topic_type: new FormControl(null, Validators.required),
    description: new FormControl(null),
    assigned_to: new FormControl(null),
  });

  constructor(public bsModalRef: BsModalRef, private issueService: IssueService) {}

  ngOnInit(): void {
    this.issueForm.controls['projectid'].setValue(this.issue.project.id);
    this.issueForm.controls['projectid'].disable();

    this.issueForm.controls['issue_title'].setValue(this.issue.issue_title);
    this.issueForm.controls['topic_type'].setValue(this.issue.topic_type);
    this.issueForm.controls['description'].setValue(this.issue.description);
    this.issueForm.controls['status'].setValue(this.issue.status);
    this.issueForm.controls['assigned_to'].setValue(this.issue.assignee?.id);

    this.userOptions$ = this.issueService.getIssueUserOptions(this.issue.project.id);
  }

  saveChanges() {
    this.issueService.updateIssue(this.issue.id, this.issueForm.getRawValue());
    this.bsModalRef.hide();
  }
}
