import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueViewComponent } from './components/issue-view/issue-view.component';
import { IssueResolver } from './resolvers/issue/issue.resolver';
import { IssuesResolver } from './resolvers/issues/issues.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IssueListComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    resolve: {
      issues: IssuesResolver
    }
  },
  {
    path: ':id',
    component: IssueViewComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      issue: IssueResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectIssueRoutingModule { }
