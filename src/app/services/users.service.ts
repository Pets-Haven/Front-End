import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = "http://localhost:3000/users";

  constructor(public http: HttpClient) { }

  addUser(user: any) {
    return this.http.post(this.baseUrl, user);
  }
  getUserByEmail(email: string) {
    return this.http.get(`${this.baseUrl}?email=${email}`);
  };
}