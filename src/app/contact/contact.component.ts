import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.contactForm = fb.group({
        'email' : [null, Validators.compose([Validators.required, Validators.email])],
        'message' : [null, Validators.compose([Validators.required, Validators.minLength(16)])]
    });
  }

  contact(value: any) {
    alert('What the fuck! this site does\'nt have an backend!');
  }
}
