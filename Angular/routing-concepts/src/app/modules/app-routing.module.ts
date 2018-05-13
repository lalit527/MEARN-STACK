import { Routes, RouterModule } from '@angular/router';
import { LibrarayComponent } from './../libraray/libraray.component';
import { BooksComponent } from './../books/books.component';
import { BookComponent } from './../books/book/book.component';
import { AuthorsComponent } from './../authors/authors.component';
import { AutorComponent } from './../authors/autor/autor.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {path:'', component: LibrarayComponent},
  {path:'books', component: BooksComponent, children: [
    {path:'book', component:BookComponent}
  ]},
  {path:'authors', component: AuthorsComponent, children: [
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