import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurersListComponent } from './insurers-list/insurers-list.component';
import { InsurersDetailComponent } from './insurers-detail/insurers-detail.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'insurers-list', pathMatch: 'full' },
  { path: 'insurers-list', component: InsurersListComponent },
  { path: 'insurers-detail', component: InsurersDetailComponent },

];

@NgModule({
  declarations: [InsurersListComponent, InsurersDetailComponent],
  imports: [
    CommonModule
  ]
})
export class InsurersModule { }
