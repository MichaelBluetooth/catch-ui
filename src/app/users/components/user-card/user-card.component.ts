import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../../models/user-profile';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {

  @Input() user: UserProfile;

  constructor() { }

  ngOnInit(): void {
  }

}
