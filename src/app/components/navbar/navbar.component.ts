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
  cartCount: any;
  constructor(
    public cart: CartService,
    public UsersService: UsersService,
    public MatDialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.UsersService.retreiveTokenData();
    // this.cart
    //   .getCart(this.UsersService.loggedinUser.userID)
    //   .subscribe((data) => {
    //     this.products = data;
    //   });
    
      // this.cartCount = this.cart.getCartCount(this.UsersService.loggedinUser.userID);
      this.cart.getCartCount(this.UsersService.loggedinUser.userID);
      // console.log(this.cart.cartCount);
      
      
      // console.log('nav',this.cartCount);
      // console.log('cart',this.cart.cartCount);
      
      
      
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
    this.MatDialog.open(AsideCartComponent, {
      width: '400px',
      data: { products: this.products },
      exitAnimationDuration: 250,
      enterAnimationDuration: 250,
      position: { top: '0', left: '0' },
    });
  }
}
