import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HzFunctionsRoutingModule } from './hz-functions-routing.module';
import { HzFunctionsListComponent } from './components/hz-functions-list/hz-functions-list.component';
import { HzfunctionFormComponent } from './components/hzfunction-form/hzfunction-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HzFunctionsListComponent,
    HzfunctionFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HzFunctionsRoutingModule
  ]
})
export class HzFunctionsModule { }
