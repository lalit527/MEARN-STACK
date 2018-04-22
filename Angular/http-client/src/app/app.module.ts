import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ServerService } from './server.service';
import { ServerInterceptor } from './server.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ServerService,
    {provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
