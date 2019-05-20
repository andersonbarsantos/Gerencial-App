import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardResumoComponent } from './card-resumo.component';

@NgModule({
  declarations: [CardResumoComponent],
  imports: [

    CommonModule
  ],
  exports: [CardResumoComponent]
})
export class CardResumoModule { }
