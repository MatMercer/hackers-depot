import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
  protected signupForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.signupForm = fb.group({
      'first-name' : [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'last-name' : [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'email' : [null, Validators.compose([Validators.required, Validators.email])],
      'password' : [null, Validators.required]
    });
  }


  signup(value: any) {
    alert('What the fuck! this site does\'nt have an backend!');
  }

}
