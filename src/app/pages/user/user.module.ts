

import { NgModule } from '@angular/core';

import { UserService } from './shared/user.service';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { CommonModule } from '@angular/common';
import { UserControllers } from './../../_helpers/controllers/user.controllers';
import { GridDadosModule } from 'src/app/@shared/components/grid-dados/grid-dados.module';
import { CardDadosModule } from 'src/app/@shared/components/card-dados/card-dados.module';
import { CardResumoModule } from 'src/app/@shared/components/card-resumo/card-resumo.module';
import { AppBootstrapModule } from 'src/app/@shared/app-bootstrap/app-bootstrap.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


const routes: Routes = [
  { path: '', redirectTo: 'user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-detail', component: UserDetailComponent },
];


@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule
    , RouterModule.forChild(routes)
    , GridDadosModule
    , CardDadosModule
    , CardResumoModule
    , AppBootstrapModule
    , AngularFontAwesomeModule

  ],
  providers: [UserService, UserControllers],
  // exports: [UserListComponent, UserDetailComponent]
})
export class UserModule {
}
