import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-dados',
  templateUrl: './card-dados.component.html',
  styleUrls: ['./card-dados.component.scss']
})
export class CardDadosComponent implements OnInit {

  @Input() title: string = "Detalhes"; 
  @Input() description: string = "Descrição"; 
  @Input() btNew: boolean = false; 

  constructor() { }

  ngOnInit() {
  }

}
