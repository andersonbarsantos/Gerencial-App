import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { SidebarModule } from '../@shared/components/sidebar/sidebar.module';
import { AppMaterialModule } from '../@shared/app-material/app-material.module';
import { AppBootstrapModule } from '../@shared/app-bootstrap/app-bootstrap.module';
import { ComponentsModule } from './../@shared/components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent   
    

  ],
  imports: [

  AppMaterialModule
    , RouterModule
    , ReactiveFormsModule
    , CommonModule    
    , SidebarModule 
    , AppBootstrapModule 
    , ComponentsModule

  ],
  exports: [
    HomeComponent,
    LoginComponent

  ],
  providers: [],
})

export class PageModule { }