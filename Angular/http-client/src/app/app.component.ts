import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  servers =  [];
  appName = this.serverService.getAppName();
  constructor(private serverService: ServerService){}
  ngOnInit() {
    this.onGet();
  }
  onGet() {
    this.serverService.getServers()
      .subscribe(
        (servers: any[]) => {
          this.servers = servers
          console.log(servers);
        },
        (error) => console.log(error)
      );
  }

  
}
