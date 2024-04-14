import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../interfaces/registerUser';
import { LoginUser } from '../interfaces/loginUser';
import { userToken } from '../interfaces/userToken';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = "http://localhost:5031/api/Account/";

  constructor(public http: HttpClient) { }

  signUpUser(user: RegisterUser) {
    return this.http.post(this.baseUrl + "register", user);
  }

  loginUser(user: LoginUser) {
    return this.http.post(this.baseUrl + "login", user);
  }

  loggedinUser: userToken = {
    userID: '',
    userEmail: '',
    userFullName: '',
    userRole: '',
    userName: ''
  }

  isUserLoggedIn():boolean {
    return (this.loggedinUser.userID === '') ? false : true
  }

  logoutUser() {
    localStorage.removeItem('_petsToken');
    this.loggedinUser = {
      userID: '',
      userEmail: '',
      userFullName: '',
      userRole: '',
      userName: ''
    }
  }
}