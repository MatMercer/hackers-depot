import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected loginForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
        'email' : ['', Validators.compose([Validators.required, Validators.email])],
        'password' : ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login(value: any) {
    alert('What the fuck! this site does\'nt have an backend!');
  }
}
