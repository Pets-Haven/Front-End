import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public userServices: UsersService) { }

  userAccountForm = new FormGroup({
    fName: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z]{3,20}$/)
      ]),
    lName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[a-zA-Z]{3,}$/)
    ]),
    email: new FormControl('',
      [Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ]),
    username: new FormControl('',
      [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9_-]{4,20}$/)
      ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9@#$%^&*!]{8,20}$/)
    ]),
    repassword: new FormControl('',
      [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9@#$%^&*!]{8,20}$/),
      ]),
    role: new FormControl('user')
  });

  get getFName() {
    return this.userAccountForm.controls['fName'];
  }
  get getLName() {
    return this.userAccountForm.controls['lName'];
  }
  get getEmail() {
    return this.userAccountForm.controls['email'];
  }
  get getUsername() {
    return this.userAccountForm.controls['username'];
  }
  get getPassword() {
    return this.userAccountForm.controls['password'];
  }
  get getRepassword() {
    return this.userAccountForm.controls['repassword'];
  }

  checkPassword() {
    if (this.userAccountForm.controls.password.value !== this.userAccountForm.controls.repassword.value) {
      this.userAccountForm.controls.repassword.setErrors({ notMatch: true });
    }
  }

  registerAccount(formDetails: any) {
    formDetails.preventDefault();
    if (this.userAccountForm.valid) {
      this.userServices.addUser(this.userAccountForm.value).subscribe({
        next: data => {
          console.log(data);
        }
      })
    } else {
      this.userAccountForm.controls.fName.markAsDirty();
      this.userAccountForm.controls.lName.markAsDirty();
      this.userAccountForm.controls.email.markAsDirty();
      this.userAccountForm.controls.username.markAsDirty();
      this.userAccountForm.controls.password.markAsDirty();
      this.userAccountForm.controls.repassword.markAsDirty();
    }
  }

}
