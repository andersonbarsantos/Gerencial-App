import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Routes, RouterModule } from '@angular/router';
import { CoveragesListComponent } from './coverages-list/coverages-list.component';
import { CoveragesDetailComponent } from './coverages-detail/coverages-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'coverages-list', pathMatch: 'full' },
  { path: 'coverages-list', component: CoveragesListComponent },
  { path: 'coverages-detail', component: CoveragesDetailComponent },

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
