import { UsersService } from 'src/app/services/users.service';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-aside-cart',
  templateUrl: './aside-cart.component.html',
  styleUrls: ['./aside-cart.component.css'],
})
export class AsideCartComponent implements OnInit {
  @Input() cartproducts: any;
  products: any;
  totalprice: number = 0;
  constructor(public cart: CartService, public UsersService: UsersService) {}
  ngOnInit(): void {
    this.UsersService.retreiveTokenData();
    this.cart
      .getCart(this.UsersService.loggedinUser.userID)
      .subscribe((res) => {
        this.products = res;
        this.totalprice = 0;
        this.products.forEach((product: any) => {
          this.totalprice =
            Math.round(
              (this.totalprice + product.productPrice * product.cartQuantity) *
                100
            ) / 100;
        });
      });
  }

  deleteButton(product: any) {
    this.cart
      .removeFromCart(this.UsersService.loggedinUser.userID, product.productId)
      .subscribe((res) => {
        this.products = this.products.filter(
          (x: any) => x.productId != product.productId
        );
        this.totalprice = 0;
        this.products.forEach((product: any) => {
          this.totalprice =
            Math.round(
              (this.totalprice + product.productPrice * product.cartQuantity) *
                100
            ) / 100;
        });
      });
  }
}
