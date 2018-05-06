import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, ContentChild, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterContentInit,
AfterContentChecked {
  @Input('setData') header: string;
  @Output('created') bookCreated = new EventEmitter<{bookName: string}>();
  @ViewChild('body') bodyDetail: ElementRef;
  @ViewChild('book') bookDetail: ElementRef;
  @ContentChild('contentData') dataCont: ElementRef;

  bodyData = 'This is data';
  title = 'This is the Title';
  body = 'This is the body';
  constructor() { }

  ngOnInit() {
  }

  showDetail() {
    console.log(this.bodyDetail);
  }

  ngAfterContentInit() {
    console.log('After Content ');
  }

  ngAfterContentChecked() {
    console.log('After Content Checked');
  }

  onAddBook() {
    console.log(this.bookDetail.nativeElement['innerHTML']);
    this.bookCreated.emit({
      bookName: this.bookDetail.nativeElement['innerHTML']
    });
  }
}
