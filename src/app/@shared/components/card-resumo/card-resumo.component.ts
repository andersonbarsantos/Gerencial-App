import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-resumo',
  templateUrl: './card-resumo.component.html',
  styleUrls: ['./card-resumo.component.scss']
})
export class CardResumoComponent implements OnInit {

  @Input() title: string = "Detalhes"; 
  @Input() description: string = "Descrição"; 

  constructor() { }

  ngOnInit() {
  }

}
