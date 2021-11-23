import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserSummary } from '../../models/user-summary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  summary$: Observable<UserSummary> = this.route.data.pipe(
    map((d: any) => d['summary'])
  );

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
