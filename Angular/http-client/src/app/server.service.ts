import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class ServerService {
    constructor(private http: HttpClient) { }
    
    getServers(): Observable<any[]> | any | boolean{
        const header = new HttpHeaders().set('Content-Type', 'application/xml');
        return this.http.get<any[]>('https://ensemble-192705.firebaseio.com/data.json', 
            {
                observe: 'body',
                responseType: 'json'
            }
        )
        
        .pipe(
            catchError(() => 'error')
          );
    }

    getAppName() {
        return this.http.get('https://ensemble-192705.firebaseio.com/appName.json');
    }
    
    saveServer(servers: any) {
        //return this.http.put('https://ensemble-192705.firebaseio.com/data.json', servers);
        const req = new HttpRequest('PUT', 'https://ensemble-192705.firebaseio.com/data.json', servers, {reportProgress: true});
        return this.http.request(req);
    }
      
}
