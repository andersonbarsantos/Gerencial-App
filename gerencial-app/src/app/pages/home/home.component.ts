import { Component, OnInit } from '@angular/core';


 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  MENU_ITEMS = [
    {
      title: 'E-commerce',
      icon: 'nb-e-commerce',
      link: '/pages/dashboard',
      home: true,
    },
    {
      title: 'IoT Dashboard',
      icon: 'nb-home',
      link: '/pages/iot-dashboard',
    },
    {
      title: 'FEATURES',
      group: true,
    },
    {
      title: 'Extra Components',
      icon: 'nb-star',
      children: [
        {
          title: 'Calendar',
          link: '/pages/extra-components/calendar',
        },
        {
          title: 'Stepper',
          link: '/pages/extra-components/stepper',
        },
        {
          title: 'List',
          link: '/pages/extra-components/list',
        },
        {
          title: 'Infinite List',
          link: '/pages/extra-components/infinite-list',
        },
        {
          title: 'Form Inputs',
          link: '/pages/extra-components/form-inputs',
        },
        {
          title: 'Accordion',
          link: '/pages/extra-components/accordion',
        },
        {
          title: 'Progress Bar',
          link: '/pages/extra-components/progress-bar',
        },
        {
          title: 'Spinner',
          link: '/pages/extra-components/spinner',
        },
        {
          title: 'Alert',
          link: '/pages/extra-components/alert',
        },
        {
          title: 'Tree',
          link: '/pages/extra-components/tree',
        },
        {
          title: 'Tabs',
          link: '/pages/extra-components/tabs',
        },
        {
          title: 'Calendar Kit',
          link: '/pages/extra-components/calendar-kit',
        },
        {
          title: 'Chat',
          link: '/pages/extra-components/chat',
        },
      ],
    },
    
  ];
  

  constructor() { }

  ngOnInit() {
   
  }

}
