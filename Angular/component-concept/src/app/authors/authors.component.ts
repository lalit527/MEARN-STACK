import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements 
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() { 
    console.log('constructor');
  }

  ngDoCheck() {
    console.log('checking');
  }

  ngOnInit() {
    console.log('On Init');
  }

  ngOnChanges() {
    console.log('On Changes');
  }

  ngAfterContentInit() {
    console.log('After Content ');
  }

  ngAfterContentChecked() {
    console.log('After Content Checked');
  }
  
  ngAfterViewInit() {
    console.log('After View Init');
  }

  ngAfterViewChecked() {
    console.log('After View Checked');
  }

  ngOnDestroy() {
    console.log('On Destroy');
  }


}
