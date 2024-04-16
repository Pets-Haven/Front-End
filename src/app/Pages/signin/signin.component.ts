import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { LoginUser } from 'src/app/interfaces/loginUser';
import { userToken } from 'src/app/interfaces/userToken';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {
  constructor(public userService: UsersService,
    public router: Router
  ) { }

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
      const loginUser: LoginUser = {
        email: this.userLoginForm.controls.email.value || '',
        password: this.userLoginForm.controls.password.value || ''
      }
      this.userService.loginUser(loginUser).subscribe({
        next: (response: any) => {
          localStorage.setItem('_petsToken', response.token);
          const decodedToken: userToken = jwtDecode(response.token);
          this.userService.loggedinUser = decodedToken;
          console.log(this.userService.isUserLoggedIn());
          
          
          // this.router.navigate(['/home']);
        },
        error: (error) => {
          if (error.status === 401) {
            console.log('Invalid email or password');
            this.userLoginForm.controls.password.setErrors({ invalidLogin: true });
          }
        }
      });
      
    }
  };
}
