import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurersListComponent } from './insurers-list/insurers-list.component';
import { InsurersDetailComponent } from './insurers-detail/insurers-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


const routes: Routes = [
  { path: '', redirectTo: 'insurers-list', pathMatch: 'full' },
  { path: 'insurers-list', component: InsurersListComponent },
  { path: 'insurers-detail', component: InsurersDetailComponent },

];

@NgModule({
  declarations: [InsurersListComponent, InsurersDetailComponent],
  imports: [
    CommonModule
    , AngularFontAwesomeModule
    , RouterModule.forChild(routes)
  ]
})
export class InsurersModule { }
