import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguradoraListComponent } from './seguradora-list/seguradora-list.component';
import { SeguradoraDetailComponent } from './seguradora-detail/seguradora-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



const routes: Routes = [
  { path: '', redirectTo: 'seguradora-list', pathMatch: 'full' },
  { path: 'seguradora-list', component: SeguradoraListComponent },
  { path: 'seguradora-detail', component: SeguradoraDetailComponent },

];

@NgModule({
  declarations: [SeguradoraListComponent, SeguradoraDetailComponent],
  imports: [
    CommonModule
    , AngularFontAwesomeModule
    , RouterModule.forChild(routes)
  ]
})
export class SeguradoraModule { }
