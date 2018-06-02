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
import { HeaderComponent } from './header/header.component';
import { AuthenticationService } from './auth.service';
import { AuthGuard } from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LibrarayComponent,
    BooksComponent,
    BookComponent,
    AuthorsComponent,
    AutorComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
