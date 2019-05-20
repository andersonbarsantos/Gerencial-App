import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from './auth/authentication.service';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PageModule } from './pages/pages.module';
import { AppBootstrapModule } from './@shared/app-bootstrap/app-bootstrap.module';
import { AppMaterialModule } from './@shared/app-material/app-material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
 
  BrowserModule
    , BrowserAnimationsModule
    , HttpClientModule
    , AppRoutingModule
    , AppMaterialModule
    , AppBootstrapModule 
    , AngularFontAwesomeModule
    , PageModule
    , TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  exports: [],
  providers: [
    AuthenticationService
    , TranslateService
    , { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    , { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    , { provide: APP_BASE_HREF, useValue: '/' }

    // provider used to create fake backend
    , fakeBackendProvider
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }