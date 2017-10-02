import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';

import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';

import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationRoutes } from './authentication/authentication.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    AuthenticationModule,
    AuthenticationRoutes
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
