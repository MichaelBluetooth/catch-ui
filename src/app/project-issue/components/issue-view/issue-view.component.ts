import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal/modal.service';
import { ProjectIssue } from '../../models/project-issue';
import { IssueEditService } from '../../services/issue-edit.service';
import { IssueService } from '../../services/issue.service';
import { EditIssueComponent } from '../edit-issue/edit-issue.component';

@Component({
  selector: 'app-issue-view',
  templateUrl: './issue-view.component.html',
  styleUrls: ['./issue-view.component.less'],
})
export class IssueViewComponent implements OnInit {
  issue: ProjectIssue;
  showComment: boolean = false;
  comment: string = '';

  @ViewChild('imageField') imageField: ElementRef;
  @ViewChild('commentField') commentField: ElementRef;

  constructor(
    private activeRoute: ActivatedRoute,
    private issueService: IssueService,
    private modal: ModalService
  ) {}

  ngOnInit(): void {
    this.activeRoute.data.subscribe((d) => {
      this.issue = d['issue'];
    });
  }

  submitComment(): void {
    if (this.comment) {
      const file =
        this.imageField.nativeElement.files.length > 0
          ? this.imageField.nativeElement.files[0]
          : null;
      this.issueService.comment(this.issue.id, this.comment, file);
      this.toggleComment();
    }
  }

  toggleComment() {
    this.showComment = !this.showComment;
    this.comment = '';
    if (this.showComment) {
      setTimeout(() => {
        this.commentField.nativeElement.focus();
      }, 50);
    }
  }

  focusCommentField() {
    this.showComment = true;
    if (this.showComment) {
      setTimeout(() => {
        this.commentField.nativeElement.scrollIntoView();
        this.commentField.nativeElement.focus();
      }, 50);
    }
  }

  print(){
    window.print()
  }

  edit(){
    this.modal.show(EditIssueComponent, {issue: this.issue});
  }
}
