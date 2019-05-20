import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavBarSimpleComponent } from './nav-bar-simple/nav-bar-simple.component';
import { CardShowComponent } from './card-show/card-show.component';

@NgModule({
  declarations: [NavbarComponent, NavBarSimpleComponent, CardShowComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent, NavBarSimpleComponent
  ],
})
export class ComponentsModule { }
