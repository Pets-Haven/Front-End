import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(public userService: UsersService) { }

  userLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  get getEmail() {
    return this.userLoginForm.controls['email'];
  };
  get getPassword() {
    return this.userLoginForm.controls['password'];
  };
  handleLogin(data: any) {
    data.preventDefault();
    if (this.userLoginForm.valid) {
      this.userService.getUserByEmail(this.userLoginForm.controls['email'].value!).subscribe({
        next: (response: any) => {
          if (response.length > 0) {
            if (response[0].password === this.userLoginForm.controls['password'].value) {
              console.log("Login Successful");
            } else {
              this.userLoginForm.controls['password'].setErrors({invalidPassword: true});
            }
          }else{
            this.userLoginForm.controls['email'].setErrors({invalidEmail: true});
          }
        },
        error: (error: any) => {
          console.log(error);
        }
      })

    }
  };
}
