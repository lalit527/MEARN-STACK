import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books = ['Books1', 'Books2', 'Books3', 'Books4']
  constructor() { }

  ngOnInit() {
  }

  chidData(event: any) {
    console.log('parent', event);
  }

}
