import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {

  users$ = this.route.data.pipe(map(d => d['users']));

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
