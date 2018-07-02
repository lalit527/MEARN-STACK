import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { BookServerService } from './book.server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private bookService: BookServerService) {}
  // appName = '';
  books = [];

  ngOnInit () {
    // this.bookService.getAppName()
    // .subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.appName = data;
    //   }
    // );
  }

  appName = this.bookService.getAppName();

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
          this.books.push(bookObj);
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

  getBookDetails(book: string) {
    alert('Please Implement the Details function ' + book);
  }

  
  
}
