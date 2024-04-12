import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-Pages-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactUsForm: FormGroup;
  showThankYouMessage: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactUsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.maxLength(50)],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get nameControl() {
    return this.contactUsForm.get('name');
  }

  get emailControl() {
    return this.contactUsForm.get('email');
  }

  get subjectControl() {
    return this.contactUsForm.get('subject');
  }

  get messageControl() {
    return this.contactUsForm.get('message');
  }

  onSubmit() {
    if (this.contactUsForm.valid) {
      console.log(this.contactUsForm.value);
      this.contactUsForm.reset();
    }
  }

  // Function to handle the click event of the "Send Message" button
  sendMessage() {
    // You can adjust the data to send according to your form structure
    const formData = this.contactUsForm.value;

    this.http.post('https://formcarry.com/s/G_TZBx7G0Wq', formData).subscribe(
      () => {
        // If request is successful, show thank you message
        this.showThankYouMessage = true;
        // Reset the form after successful submission if needed
        this.contactUsForm.reset();
      },
      error => {
        // Handle error here
        console.error('There was an error!', error);
      }
    );
  }
}
