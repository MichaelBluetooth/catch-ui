import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ChartComponent } from './components/chart/chart.component';


@NgModule({
  declarations: [
    HomeComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
