import { product } from './../../services/product';
import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: any;
  totalprice: number = 0;
  constructor(
    public cart: CartService,
    public userservice: UsersService,
    public route: Router
  ) {}
  ngOnInit(): void {
    this.userservice.retreiveTokenData();
    this.cart
      .getCart(this.userservice.loggedinUser.userID)
      .subscribe((data) => {
        this.products = data;
        this.products.forEach((product: any) => {
          this.totalprice =
            Math.round(
              (this.totalprice + product.productPrice * product.cartQuantity) *
                100
            ) / 100;
        });
      });
  }
  changeHandle(product: any) {
    if (product.cartQuantity > product.productQuantity) {
      product.cartQuantity = product.productQuantity;
      this.cart
        .editCart(this.userservice.loggedinUser.userID, product)
        .subscribe({
          next: (data) => {
            this.totalprice = 0;
            this.products.forEach((product: any) => {
              this.totalprice =
                Math.round(
                  (this.totalprice +
                    product.productPrice * product.cartQuantity) *
                    100
                ) / 100;
            });
          },
        });
    } else if (product.cartQuantity < 1) {
      product.cartQuantity = 1;
      this.cart
        .editCart(this.userservice.loggedinUser.userID, product)
        .subscribe({
          next: (data) => {
            this.totalprice = 0;
            this.products.forEach((product: any) => {
              this.totalprice =
                Math.round(
                  (this.totalprice +
                    product.productPrice * product.cartQuantity) *
                    100
                ) / 100;
            });
          },
        });
    }
  }

  addbutton(product: any): void {
    if (product.cartQuantity < product.productQuantity) {
      product.cartQuantity = product.cartQuantity + 1;
      this.cart
        .editCart(this.userservice.loggedinUser.userID, product)
        .subscribe({
          next: (data) => {
            this.totalprice = 0;
            this.products.forEach((product: any) => {
              this.totalprice =
                Math.round(
                  (this.totalprice +
                    product.productPrice * product.cartQuantity) *
                    100
                ) / 100;
            });
          },
        });
    } else if (product.cartQuantity > product.productQuantity) {
      product.cartQuantity = product.productQuantity;
      this.cart
        .editCart(this.userservice.loggedinUser.userID, product)
        .subscribe({
          next: (data) => {
            this.totalprice = 0;
            this.products.forEach((product: any) => {
              this.totalprice =
                Math.round(
                  (this.totalprice +
                    product.productPrice * product.cartQuantity) *
                    100
                ) / 100;
            });
          },
        });
    }
  }
  minusbutton(product: any): void {
    if (product.cartQuantity > 1) {
      product.cartQuantity = product.cartQuantity - 1;
      this.cart
        .editCart(this.userservice.loggedinUser.userID, product)
        .subscribe({
          next: (data) => {
            this.totalprice = 0;
            this.products.forEach((product: any) => {
              this.totalprice =
                Math.round(
                  (this.totalprice +
                    product.productPrice * product.cartQuantity) *
                    100
                ) / 100;
            });
          },
        });
    }
  }
  deleteButton(product: any) {
    this.cart
      .removeFromCart(this.userservice.loggedinUser.userID, product.productId)
      .subscribe({
        next: (data) => {
          this.products = this.products.filter(
            (x: any) => x.productId != product.productId
          );
          this.totalprice = 0;
          this.products.forEach((product: any) => {
            this.totalprice =
              Math.round(
                (this.totalprice +
                  product.productPrice * product.cartQuantity) *
                  100
              ) / 100;
          });
        },
      });
  }
  totalProductprice(product: any) {
    return Math.round(product.productPrice * product.cartQuantity * 100) / 100;
  }
}
