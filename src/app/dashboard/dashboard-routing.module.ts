import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardResolver } from './resolvers/dashboard/dashboard.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      summary: DashboardResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
