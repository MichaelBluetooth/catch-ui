import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ProfileResolver } from './resolvers/profile/profile.resolver';
import { UserByIdResolver } from './resolvers/user-by-id/user-by-id.resolver';
import { UsersListResolver } from './resolvers/users-list/users-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      users: UsersListResolver
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      profile: ProfileResolver
    }
  },
  {
    path: ':id',
    component: ProfileComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      profile: UserByIdResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
