import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { LibrarayComponent } from './libraray/libraray.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LibrarayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
