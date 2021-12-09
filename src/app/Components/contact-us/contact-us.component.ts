import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  Name='string';
  EmailRequired='string';
  description='string';
  PhoneNumber='int';

  NameFormControl=new FormControl('', [
    Validators.required,
  ]);
  emailFormControl=new FormControl('', [
    Validators.required,
  ]);
  descriptionFormControl=new FormControl('', [
    Validators.required,
  ]);
  PhoneNumberFormControl=new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
  }
}
  export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}     