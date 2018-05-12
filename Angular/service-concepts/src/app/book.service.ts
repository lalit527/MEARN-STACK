import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class BookService {
  @Output() bookChange:EventEmitter<any> = new EventEmitter();
  books = [
    {
      name: 'Book1',
      author: 'Author1'
    },
    {
      name: 'Book2',
      author: 'Author2'
    },
    {
      name: 'Book3',
      author: 'Author3'
    },
    {
      name: 'Book4',
      author: 'Author4'
    }
  ]
  getBooks() {
    this.bookChange.emit(this.books.slice());
  };

  addBook(book) {
    console.log(book);
    this.books.push(book);

  }
}