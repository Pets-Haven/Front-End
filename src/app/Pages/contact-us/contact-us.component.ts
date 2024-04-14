import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Pages-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  public ContactForm!: FormGroup;
  constructor(public FormBuilder: FormBuilder) {
    this.ContactForm = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  get getName() {
    return this.ContactForm.controls['name'];
  }
  get getEmail() {
    return this.ContactForm.controls['email'];
  }
  get getMessage() {
    return this.ContactForm.controls['message'];
  }
  onSubmit(formDetails: any) {
    formDetails.preventDefault();
    if (this.ContactForm.valid) {
      console.log(this.ContactForm.value);
    } else {
      this.ContactForm.controls['name'].markAsDirty();
      this.ContactForm.controls['email'].markAsDirty();
      this.ContactForm.controls['message'].markAsDirty();
    }
  }
}
