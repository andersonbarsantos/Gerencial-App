import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const routes: Routes = [
  { path: '', redirectTo: 'client-list', pathMatch: 'full' },
  { path: 'client-list', component: ClientListComponent },

];

@NgModule({
  declarations: [ClientListComponent],
  imports: [
    CommonModule
    , AngularFontAwesomeModule
    , RouterModule.forChild(routes)
  ]
})
export class ClientModule { }


