import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ProjectIssueRoutingModule } from './project-issue-routing.module';
import { IssueViewComponent } from './components/issue-view/issue-view.component';
import { CoreModule } from '../core/core.module';
import { IssueDetailsSectionComponent } from './components/issue-details-section/issue-details-section.component';
import { IssueDatesSectionComponent } from './components/issue-dates-section/issue-dates-section.component';
import { IssuePeopleSectionComponent } from './components/issue-people-section/issue-people-section.component';
import { IssueCommentsComponent } from './components/issue-comments/issue-comments.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { HttpClientModule } from '@angular/common/http';
import { IssueService } from './services/issue.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkflowBtnComponent } from './components/workflow-btn/workflow-btn.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';
import { CreateIssueComponent } from './components/create-issue/create-issue.component';


@NgModule({
  declarations: [
    IssueViewComponent,
    IssueDetailsSectionComponent,
    IssueDatesSectionComponent,
    IssuePeopleSectionComponent,
    IssueCommentsComponent,
    IssueListComponent,
    WorkflowBtnComponent,
    EditIssueComponent,
    CreateIssueComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectIssueRoutingModule,
    BsDropdownModule.forRoot(),
    CoreModule
  ],
  providers: [
    // IssueService
  ]
})
export class ProjectIssueModule { }
