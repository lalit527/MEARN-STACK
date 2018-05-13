import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LibrarayComponent } from './libraray/libraray.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { AuthorsComponent } from './authors/authors.component';
import { AutorComponent } from './authors/autor/autor.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrarayComponent,
    BooksComponent,
    BookComponent,
    AuthorsComponent,
    AutorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
