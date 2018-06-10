import { Component, ViewChild, ElementRef } from '@angular/core';
import { BookServerService } from './book.server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private bookService: BookServerService) {}

  books = [];

  onSave(book:string, author:string) {
    let bookObj ={
      name: book,
      author: author,
      edition: '1'
    };
    this.bookService.saveBooks(bookObj)
      .subscribe(
        (data) => {
          console.log(data);
          // TODO: Make call to getSingleBook and add data to this.books
        }
      );
  }

  onGet() {
    this.bookService.getBooks()
      .subscribe(
        (data) => {
          let allData = Object.keys(data);
          for(let i of allData){
            this.books.push(data[i]);
          }
        }
      );
  }

  appName = this.bookService.getAppName();
}
