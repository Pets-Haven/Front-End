import { LoginUser } from './../../../interfaces/loginUser';
import { Component,OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { userToken } from 'src/app/interfaces/userToken';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  UserFirstName: string = ''; 
  

  constructor(private userService: UsersService) {}

  
  ngOnInit(): void {
    this.userService.retreiveTokenData();
    if (this.userService.isUserLoggedIn()) {
      this.UserFirstName = this.userService.loggedinUser.userFullName.split(' ')[0];
    } 
    else {
      this.UserFirstName = 'Guest';
    }
  }
  logout() {
    this.userService.logoutUser();
  }
  
}