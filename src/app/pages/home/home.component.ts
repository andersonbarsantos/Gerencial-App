import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/@shared/models/user.model';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profile: User;
  title = "SIGCOR";

  menus = [
    {
      title: 'Principal',
      type: 'header'
    },
    {
      title: 'Dados Basicos',
      icon: 'fa fa-shopping-cart',
      active: false,
      type: 'dropdown',
      path: "",
      submenus: [
        {
          title: 'Usuário',
          path: "/user"
        },
        {
          title: 'Funcionario',
          path: "/funcionarios"
        },
        {
          title: 'Ramos',
          path: '/ramos'
        },
        {
          title: 'Seguradoras',
          path: '/seguradoras'
        },
        {
          title: 'Coberturas',
          path: '/coberturas'
        }
      ]
    },
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'simple',
      path: "/dashboard",

      // submenus: [
      //   {
      //     title: 'Dashboard 1',
      //     badge: {
      //       text: 'Pro ',
      //       class: 'badge-success'
      //     }
      //   },
      //   {
      //     title: 'Dashboard 2'
      //   },
      //   {
      //     title: 'Dashboard 3'
      //   }
      // ]
    },
    {
      title: 'Cliente',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      path: "/client",

    },
    {
      title: 'Contratos',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      path: "/contratos",

    },
    {
      title: 'Financeiro',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      path: "/financeiro",

    },

    // {
    //   title: 'Financeiro',
    //   icon: 'far fa-gem',
    //   active: false,
    //   type: 'dropdown',
    //   submenus: [
    //     {
    //       title: 'General',
    //     },
    //     {
    //       title: 'Panels'
    //     },
    //     {
    //       title: 'Tables'
    //     },
    //     {
    //       title: 'Icons'
    //     },
    //     {
    //       title: 'Forms'
    //     }
    //   ]
    // },
    // {
    //   title: 'Charts',
    //   icon: 'fa fa-chart-line',
    //   active: false,
    //   type: 'dropdown',
    //   submenus: [
    //     {
    //       title: 'Pie chart',
    //     },
    //     {
    //       title: 'Line chart'
    //     },
    //     {
    //       title: 'Bar chart'
    //     },
    //     {
    //       title: 'Histogram'
    //     }
    //   ]
    // },
    // {
    //   title: 'Maps',
    //   icon: 'fa fa-globe',
    //   active: false,
    //   type: 'dropdown',
    //   submenus: [
    //     {
    //       title: 'Google maps',
    //     },
    //     {
    //       title: 'Open street map'
    //     }
    //   ]
    // },
    // {
    //   title: 'Extra',
    //   type: 'header'
    // },
    // {
    //   title: 'Documentation',
    //   icon: 'fa fa-book',
    //   active: false,
    //   type: 'simple',
    //   badge: {
    //     text: 'Beta',
    //     class: 'badge-primary'
    //   },
    // },
    // {
    //   title: 'Calendar',
    //   icon: 'fa fa-calendar',
    //   active: false,
    //   type: 'simple'
    // },
    // {
    //   title: 'Sobre',
    //   icon: 'fa fa-folder',
    //   active: false,
    //   type: 'simple'
    // }
  ];

  constructor(  
     private authenticationService: AuthenticationService
    ) {
      
     }

  ngOnInit() {
   this.profile = this.authenticationService.currentUserValue;
  
  }

}
