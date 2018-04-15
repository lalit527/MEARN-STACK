import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class ServerService {
    constructor(private http: HttpClient) { }
    
    getServers(): Observable<any[]> | any {
        return this.http.get<any[]>('https://ensemble-192705.firebaseio.com/data.json')
        .pipe(
            catchError(() => 'error')
          );
    }

    getAppName() {
        return this.http.get('https://ensemble-192705.firebaseio.com/appName.json');
    }
      
}
