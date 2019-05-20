import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BranchDetailComponent } from './branch-detail/branch-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const routes: Routes = [
  { path: '', redirectTo: 'branch-list', pathMatch: 'full' },
  { path: 'branch-list', component: BranchListComponent },
  { path: 'branch-detail', component: BranchDetailComponent },

];

@NgModule({
  declarations: [ BranchListComponent, BranchDetailComponent],
  imports: [
    CommonModule
    , AngularFontAwesomeModule
    , RouterModule.forChild(routes)
  ]
})
export class BranchModule { }
