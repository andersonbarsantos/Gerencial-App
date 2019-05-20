import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RamoListComponent } from './ramo-list/ramo-list.component';
import { RamoDetailComponent } from './ramo-detail/ramo-detail.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'ramo-list', pathMatch: 'full' },
  { path: 'ramo-list', component: RamoListComponent },
  { path: 'ramo-detail', component: RamoDetailComponent },

];

@NgModule({
  declarations: [RamoListComponent, RamoDetailComponent],
  imports: [
    CommonModule
    , AngularFontAwesomeModule
    , RouterModule.forChild(routes)
  ]
})
export class RamoModule { }
