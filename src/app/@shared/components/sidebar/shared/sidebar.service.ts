import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Routes, RouterModule, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  [x: string]: any;
  toggled = false;
  _hasBackgroundImage = true;

  menus:[]

  constructor(
    private route : Router,
    // private authenticationService: AuthenticationService
    ) {

  }

  toggle() {
    this.toggled = !this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus; 
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }


  setMenu(menu : any ){
    this.menus =  menu ; 
  }
}
