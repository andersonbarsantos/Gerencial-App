import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'Employee-list', pathMatch: 'full' },
  { path: 'Employee-list', component: EmployeeListComponent },
  { path: 'Employee-detail', component: EmployeeDetailComponent },

];

@NgModule({
  declarations: [EmployeeListComponent, EmployeeDetailComponent],
  imports: [
    CommonModule
    , AngularFontAwesomeModule
    , RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
