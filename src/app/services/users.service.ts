import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../interfaces/registerUser';
import { LoginUser } from '../interfaces/loginUser';
import { userToken } from '../interfaces/userToken';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';


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

  retreiveTokenData(){
    let token = localStorage.getItem('_petsToken');
    if(token){
      let userToken: userToken = jwtDecode(token);
      this.loggedinUser.userID = userToken.userID;
      this.loggedinUser.userEmail = userToken.userEmail;
      this.loggedinUser.userFullName = userToken.userFullName;
      this.loggedinUser.userRole = userToken.userRole;
      this.loggedinUser.userName = userToken.userName;
      
    }
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