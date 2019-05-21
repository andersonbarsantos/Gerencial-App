import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'client',
        loadChildren: './pages/client/client.module#ClientModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'ramos',
        loadChildren: './pages/branch/branch.module#BranchModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'seguradoras',
        loadChildren: './pages/insurers/insurers.module#InsurersModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'funcionarios',
        loadChildren: './pages/employee/employee.module#EmployeeModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'coberturas',
        loadChildren: './pages/coverages/coverages.module#CoveragesModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'contratos',
        loadChildren: './pages/contract/contract.module#ContractModule',
        canActivate: [AuthGuard]
      }
      

    ],
  },
  {
    path: 'login',
    component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false
};


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, config)],

  exports: [RouterModule]
})
export class AppRoutingModule { }