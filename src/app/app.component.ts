import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'PetsHavenUI';
  isAdmin : boolean = false;
  constructor(private userService:UsersService) {}
  ngOnInit(): void {
    this.userService.retreiveTokenData();
    if(this.userService.loggedinUser.userRole === 'Admin'){
      this.isAdmin = true;
    }
  }

  
}
