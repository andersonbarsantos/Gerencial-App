import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-dados',
  templateUrl: './grid-dados.component.html',
  styleUrls: ['./grid-dados.component.scss']
})
export class GridDadosComponent implements OnInit {

  @Input() dataValue: any[]  = []; 

  constructor() { }

  ngOnInit() {
  console.log(this.dataValue)
  }

}
