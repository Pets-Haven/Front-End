import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = "http://localhost:5031/api/Account/";

  constructor(public http: HttpClient) { }

  signUpUser(user: any) {
    return this.http.post(this.baseUrl + "register", user);
  }

  loginUser(user: any) {
    return this.http.post(this.baseUrl + "login", user);
  }
}