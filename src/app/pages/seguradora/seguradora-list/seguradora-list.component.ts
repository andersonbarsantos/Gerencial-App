import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguradora-list',
  templateUrl: './seguradora-list.component.html',
  styleUrls: ['./seguradora-list.component.scss']
})
export class SeguradoraListComponent implements OnInit {

  seguradoras:[]

  constructor() { }

  ngOnInit() {
  }

}
