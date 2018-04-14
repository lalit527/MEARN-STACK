import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
     const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://ensemble-192705.firebaseio.com/data.json',
    //   servers);
    return this.http.put('https://ensemble-192705.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }
  getServers() {
    return this.http.get('https://ensemble-192705.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          let data = response.json();
          // data = data['-LA2ySRNKBRUWDtjUiyk'];
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
  getAppName() {
    return this.http.get('https://ensemble-192705.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
