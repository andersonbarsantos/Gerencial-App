import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AppBootstrapModule } from 'src/app/@shared/app-bootstrap/app-bootstrap.module';

const routes: Routes = [
  { path: '', component: DashboardViewComponent },
];


@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule
    , RouterModule.forChild(routes)
    , AppBootstrapModule
  ]
})
export class DashboardModule { }
