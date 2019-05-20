import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ramo-list',
  templateUrl: './ramo-list.component.html',
  styleUrls: ['./ramo-list.component.scss']
})
export class RamoListComponent implements OnInit {

   ramos:[]
   
  constructor() { }

  ngOnInit() {
  }

}
