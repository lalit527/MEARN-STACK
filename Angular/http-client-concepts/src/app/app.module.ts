import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookServerService } from './book.server.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
    BookServerService,
    {provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
