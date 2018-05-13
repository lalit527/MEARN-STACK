import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BookService } from '../book.service';
@Component({
  selector: 'app-libraray',
  templateUrl: './libraray.component.html',
  styleUrls: ['./libraray.component.css']
})
export class LibrarayComponent implements OnInit {
  @ViewChild('name') nameData = ElementRef;
  @ViewChild('author') author = ElementRef;
  
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  addBook(name, author) {
    var obj = {
      name: name.value,
      author: author.value
    }
    this.bookService.addBook(obj);
  }

}
