import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridDadosComponent } from './grid-dados.component';

@NgModule({
  declarations: [
    GridDadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GridDadosComponent]
})
export class GridDadosModule {

  @Input() dados: any; 

  ngOnInit() {
    console.log( this.dados);
  }

 }
