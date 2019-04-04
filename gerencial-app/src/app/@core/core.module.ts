import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from './util/analytics.service';
import { of as observableOf } from 'rxjs';

//import { throwIfAlreadyLoaded } from './module-import-guard';

export const NB_CORE_PROVIDERS = [
  AnalyticsService
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  
  ]
})


export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
   // throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [        
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
 }
