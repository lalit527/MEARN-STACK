import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './library/books/books.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    LibraryComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
