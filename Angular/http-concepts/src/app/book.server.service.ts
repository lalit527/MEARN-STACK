import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookServerService {

  constructor(private http: Http) { }

  getBooks() {
    return this.http.get('https://ensemble-192705.firebaseio.com/books.json')
      .map(
        (response: Response) => {
          
          return response.json();
        }
      );
  }

  saveBooks(books: any) {
    const header = new Headers({'Content-Type': 'application/json', 'x-auth': 'xyzzzz'})
    return this.http.post("https://ensemble-192705.firebaseio.com/books.json", 
      books,
    {headers: header})
      .map(
        (response: Response) => {
          console.log(response);
          return response.json();
        }
      );
  }

  getSingleBook() {
    // TODO: make a call to get single book
  }

  getAppName() {
    return this.http.get('https://ensemble-192705.firebaseio.com/appname.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

}
