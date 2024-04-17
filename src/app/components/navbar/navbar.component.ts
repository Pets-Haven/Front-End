import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';
import { AsideCartComponent } from './aside-cart/aside-cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = true;
  products: any;
  constructor(
    public cart: CartService,
    public UsersService: UsersService,
    public MatDialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.UsersService.retreiveTokenData();
  }
  // isLogged() {
  //   if (localStorage.getItem('_petsToken')) {
  //     this.isLogin = true;
  //   } else {
  //     this.isLogin = false;
  //   }
  // }
  openCart() {
    this.cart
      .getCart(this.UsersService.loggedinUser.userID)
      .subscribe((data) => {
        this.products = data;
      });
    this.MatDialog.open(AsideCartComponent);
  }
}
