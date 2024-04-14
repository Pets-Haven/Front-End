import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../interfaces/registerUser';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = "http://localhost:5031/api/Account/";

  constructor(public http: HttpClient) { }

  signUpUser(user: RegisterUser) {
    return this.http.post(this.baseUrl + "register", user);
  }

  loginUser(user: any) {
    return this.http.post(this.baseUrl + "login", user);
  }
}