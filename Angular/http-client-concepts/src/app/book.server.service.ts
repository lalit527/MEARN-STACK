import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable()
export class BookServerService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get('https://ensemble-192705.firebaseio.com/books.json',
      {
        observe: 'body', // for full response observe: 'response'
        responseType: 'json'
      }
    )
    .pipe(
      catchError(() => 'error')
    );
  }
// {reportProgress: true})
  // saveBooks(books: any) {
  //   const options =  {
  //     headers: new HttpHeaders(
  //       {'Content-Type': 'application/json', 'x-auth': 'xyzzzz'}
  //     )
  //   }
  //   return this.http.post("https://ensemble-192705.firebaseio.com/books.json", 
  //     books,
  //     options)
  // }

  saveBooks(books: any) {
    const options =  {
      headers: new HttpHeaders(
        {'Content-Type': 'application/json', 'x-auth': 'xyzzzz'}
      )
    }
    const req = new HttpRequest('POST', "https://ensemble-192705.firebaseio.com/books.json", books, {reportProgress: true})
    return this.http.request(req);
  }
  getSingleBook() {
    // TODO: make a call to get single book
  }

  getAppName() {
    return this.http.get('https://ensemble-192705.firebaseio.com/appname.json');
  }

}
