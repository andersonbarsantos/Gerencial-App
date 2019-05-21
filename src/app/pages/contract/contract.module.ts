import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const routes: Routes = [
  { path: '', redirectTo: 'contract-list', pathMatch: 'full' },
  { path: 'contract-list', component: ContractListComponent },
  { path: 'contract-detail', component: ContractDetailComponent },

];


@NgModule({
  declarations: [ContractListComponent, ContractDetailComponent],
  imports: [
    CommonModule
    , AngularFontAwesomeModule
    , RouterModule.forChild(routes)
  ]
})
export class ContractModule { }
