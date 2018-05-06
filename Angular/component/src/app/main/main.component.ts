import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  isDisabled = 'Data';
  myData = 'Angular';
  status = 'offline';
  isEnabled = false;
  listOfData = ['apple', 'banana', 'grapes', 'mango'];
  constructor() {
    setTimeout(() => {
      console.log('method');
      this.status = 'online';
      this.isEnabled = true;
    }, 4000);
  }
  onClick() {
    alert(this.myData);
  }

  getColor() {
    return 'red';
  }
  onDivSelect(d: any) {
    console.dir(d);
  }
  
}