import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HzFunctionsListComponent } from './components/hz-functions-list/hz-functions-list.component';
import { HzfunctionFormComponent } from './components/hzfunction-form/hzfunction-form.component';
import { HzfunctionResolver } from './resolvers/hzfunction/hzfunction.resolver';
import { HzfunctionsResolver } from './resolvers/hzfunctions/hzfunctions.resolver';

const routes: Routes = [
  {
    path: '',
    component: HzFunctionsListComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      hzFunctions: HzfunctionsResolver
    },
    children: [
      {
        path: '',
        component: HzfunctionFormComponent
      },
      {
        path: ':id',
        component: HzfunctionFormComponent,
        resolve: {
          hzFunction: HzfunctionResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HzFunctionsRoutingModule { }
