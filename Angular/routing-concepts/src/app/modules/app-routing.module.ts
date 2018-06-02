import { Routes, RouterModule } from '@angular/router';
import { LibrarayComponent } from './../libraray/libraray.component';
import { BooksComponent } from './../books/books.component';
import { BookComponent } from './../books/book/book.component';
import { AuthorsComponent } from './../authors/authors.component';
import { AutorComponent } from './../authors/autor/autor.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth-guard.service';

const appRoutes: Routes = [
  {path:'', component: LibrarayComponent},
  {path:'books', canActivateChild:[AuthGuard], component: BooksComponent, children: [
    {path:'book', component:BookComponent}
  ]},
  {path:'authors', canActivate: [AuthGuard], component: AuthorsComponent, children: [
    {path:'author', component:AutorComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
  
}