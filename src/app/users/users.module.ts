import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './components/users-list/users-list.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserFormComponent,
    ChangePasswordComponent,
    UserCardComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
