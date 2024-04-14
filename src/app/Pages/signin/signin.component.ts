import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
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
      this.userService.loginUser(this.userLoginForm.value).subscribe((response: any) => {
        console.log(jwtDecode(response.token));
      });
    }
  };
}
