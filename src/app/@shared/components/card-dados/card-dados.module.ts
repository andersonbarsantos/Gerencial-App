import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDadosComponent } from './card-dados.component';

@NgModule({
  declarations: [CardDadosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardDadosComponent
  ]
})
export class CardDadosModule { }
