import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardViewComponent },
];


@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule
    , RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
