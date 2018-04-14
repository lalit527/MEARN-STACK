import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberCounter: Subscription;
  customObserver: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
      .map((data: number) => {
          return data * 2;
        }
      );

    // this.numberCounter = myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    const myObservable  = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('My first response');
      }, 2000);

      setTimeout(() => {
        observer.next('My second response');
      }, 4000);

      setTimeout(() => {
        observer.next('My third response');
      }, 5000);

      setTimeout(() => {
        observer.error('My error response');
      }, 8000);

      setTimeout(() => {
        observer.complete();
      }, 6000);

      
      setTimeout(() => {
        observer.next('My fourth response');
      }, 7000);

    });

    this.customObserver = myObservable.subscribe(
      (data: string) => { console.log(data) },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

  ngOnDestroy() {
    //this.numberCounter.unsubscribe();
    this.customObserver.unsubscribe();
  }

}
