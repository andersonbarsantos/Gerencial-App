import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserControllers } from './user.controllers';
import { CoverageControllers } from './coverage.controllers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule    
  ],
  providers:[UserControllers,CoverageControllers]
})
export class ControllersModule { }

