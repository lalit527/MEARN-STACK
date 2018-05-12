import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isActive = false;
  list = [1, 2, 3, 4, 5, 6 ,7];
  ngOnInit() {}
  
  activateData() {
    if(this.isActive) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }

}
