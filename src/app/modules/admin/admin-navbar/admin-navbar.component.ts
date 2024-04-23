import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['../admin.component.css']
})
export class AdminNavbarComponent implements OnInit{

  adminName:string='';
  constructor(private user: UsersService) {}
  ngOnInit(): void {
    this.user.retreiveTokenData();
    this.adminName = this.user.loggedinUser.userFullName;
  }

}
