import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  forbiddenUsernames = ['Vishnu', 'Senthil'];
  constructor() { }

  ngOnInit() {
    
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'password': new FormControl(null, [Validators.required])
    });
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    console.log(control);
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  forbiddenFname(control: FormControl): Promise<any> | Observable<any>{
    return new Promise<any>((resolve, reject) => {
      setTimeout(function(){
        if(control.value === 'foo'){
          resolve({'fnameIsForbidden': true});
        }
        resolve(null);
      }, 5000);
    });   
  }

  onSubmit() {
    // console.log("Hello", this.signupForm.value.userData.email, this.signupForm.value.password); 
    this.signupForm.reset();
    console.log(this.signupForm);
    // console.log(this.signupForm.value.email);
  }

}
