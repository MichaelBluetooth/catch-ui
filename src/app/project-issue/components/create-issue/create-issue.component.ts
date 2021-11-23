import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { of } from 'rxjs';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.less'],
})
export class CreateIssueComponent implements OnInit {
  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  current_project: any;
  userOptions$ = of([]);
  issueForm: FormGroup = new FormGroup({
    projectid: new FormControl(null),
    status: new FormControl("New", Validators.required),
    issue_title: new FormControl(null, Validators.required),
    topic_type: new FormControl("Design", Validators.required),
    description: new FormControl(null),
    assigned_to: new FormControl(null)
  });

  constructor(public bsModalRef: BsModalRef, private issueService: IssueService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('current_user'));
    this.current_project = JSON.parse(localStorage.getItem('current_project'));
    this.issueForm.controls['projectid'].setValue(user.current_projectid);
    this.issueForm.controls['projectid'].disable();
    this.userOptions$ = this.issueService.getIssueUserOptions(user.current_projectid);
  }

  saveChanges() {
    this.issueService.createIssue(this.issueForm.getRawValue());
    this.bsModalRef.hide();
  }
}
