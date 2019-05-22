import { NgModule } from '@angular/core';

import { CoverageService } from './shared/coverage.service';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { GridDadosModule } from 'src/app/@shared/components/grid-dados/grid-dados.module';
import { CardDadosModule } from 'src/app/@shared/components/card-dados/card-dados.module';
import { CardResumoModule } from 'src/app/@shared/components/card-resumo/card-resumo.module';
import { AppBootstrapModule } from 'src/app/@shared/app-bootstrap/app-bootstrap.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CoverageControllers } from 'src/app/_helpers/controllers/coverage.controllers';
import { CoveragesListComponent } from './coverages-list/coverages-list.component';
import { CoveragesDetailComponent } from './coverages-detail/coverages-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'coverages-list', pathMatch: 'full' },
  { path: 'coverages-list', component: CoveragesListComponent },
  { path: 'coverages-detail', component: CoveragesDetailComponent },

];


@NgModule({
  declarations: [CoveragesListComponent, CoveragesDetailComponent],
  imports: [
   CommonModule
    , RouterModule.forChild(routes)
    , GridDadosModule
    , CardDadosModule
    , CardResumoModule
    , AppBootstrapModule
    , AngularFontAwesomeModule

  ],
  providers: [CoverageService, CoverageControllers],
  // exports: [UserListComponent, UserDetailComponent]
})
export class CoveragesModule {
}
