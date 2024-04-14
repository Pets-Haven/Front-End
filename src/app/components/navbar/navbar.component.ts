import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogin: boolean = true;

  
  constructor() { }
  // isLogged() {
  //   if (localStorage.getItem('_petsToken')) {
  //     this.isLogin = true;
  //   } else {
  //     this.isLogin = false;
  //   }
  // }
}
