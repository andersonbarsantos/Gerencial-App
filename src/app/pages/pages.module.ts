import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module'
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
    , PagesRoutingModule
    , DashboardModule
  ]
})
export class PagesModule { }
