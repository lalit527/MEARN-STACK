import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Array<Object>;

  constructor(private bookServ: BookService) { }

  ngOnInit() {
    this.books = this.bookServ.getBooks();
  }

}
