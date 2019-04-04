import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ECommerceComponent } from './e-commerce/e-commerce.component';
// import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: 'dashboard',
    component: DashboardViewComponent,
  },{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
   // component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}