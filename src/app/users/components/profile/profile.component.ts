import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  user$ = this.route.data
    .pipe(map(d => {
      
      return d;
    }))
    .pipe(map(d => d['profile']));

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
