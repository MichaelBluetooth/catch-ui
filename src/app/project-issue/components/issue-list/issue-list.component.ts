import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal/modal.service';
import { CreateIssueComponent } from '../create-issue/create-issue.component';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.less']
})
export class IssueListComponent {

  issues$ = this.route.data.pipe(map(d => d['issues']));

  constructor(private route: ActivatedRoute, private modal: ModalService) { }

  newIssue(){
    this.modal.show(CreateIssueComponent);
  }
}
