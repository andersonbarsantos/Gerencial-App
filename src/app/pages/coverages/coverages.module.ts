import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Routes, RouterModule } from '@angular/router';
import { CoveragesListComponent } from './coverages-list/coverages-list.component';
import { CoveragesDetailComponent } from './coverages-detail/coverages-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'Coverages-list', pathMatch: 'full' },
  { path: 'Coverages-list', component: CoveragesListComponent },
  { path: 'Coverages-detail', component: CoveragesDetailComponent },

];

@NgModule({
  declarations: [ CoveragesListComponent, CoveragesDetailComponent],
  imports: [
    CommonModule
    , AngularFontAwesomeModule
    , RouterModule.forChild(routes)
  ]
})

export class CoveragesModule { }
