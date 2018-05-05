import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  isDisabled = 'Data';
  myData = 'Angular';
  onClick() {
    alert(this.myData);
  }
  
}