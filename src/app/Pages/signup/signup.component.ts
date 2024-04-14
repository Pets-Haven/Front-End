import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { RegisterUser } from 'src/app/interfaces/registerUser';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public userServices: UsersService,
    private _snackBar: MatSnackBar,
    public router: Router
  ) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

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
      isAdmin: new FormControl(false)
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
    // this.newUser.FirstName = this.userAccountForm.controls.fName.value||"";
    // this.newUser.LastName = this.userAccountForm.controls.lName.value||"";
    // this.newUser.Email = this.userAccountForm.controls.email.value||"";
    // this.newUser.UserName = this.userAccountForm.controls.username.value||"";
    // this.newUser.Password = this.userAccountForm.controls.password.value||"";
    // this.newUser.ConfirmPassword = this.userAccountForm.controls.repassword.value||"";
    // this.newUser.isAdmin = false;
    const newUser: RegisterUser = {
      firstName: this.userAccountForm.controls.fName.value||"",
      lastName: this.userAccountForm.controls.lName.value||"",
      email: this.userAccountForm.controls.email.value||"",
      userName: this.userAccountForm.controls.username.value||"",
      password: this.userAccountForm.controls.password.value||"",
      confirmPassword: this.userAccountForm.controls.repassword.value||"",
      isAdmin: false
    };
    
    if (this.userAccountForm.valid) {
      this.userServices.signUpUser(newUser).subscribe({
        next: (response: any) => {
          if(response.message === 'Logged in successfully'){
            localStorage.setItem('_petsToken', response.token);
            this.openSnackBar('Account Created Successfully', 'Close');
            this.router.navigate(['/home']);

          }
          
        },
        error: (error) => {
          if(error.error?.emailError){
            this.userAccountForm.controls.email.setErrors({emailTaken: true})
          }
          if(error.error?.usernameError){
            this.userAccountForm.controls.username.setErrors({userNameTaken: true})
          }
        }
      });
      }
    else {
      this.userAccountForm.controls.fName.markAsDirty();
      this.userAccountForm.controls.lName.markAsDirty();
      this.userAccountForm.controls.email.markAsDirty();
      this.userAccountForm.controls.username.markAsDirty();
      this.userAccountForm.controls.password.markAsDirty();
      this.userAccountForm.controls.repassword.markAsDirty();
    }
  }


}
