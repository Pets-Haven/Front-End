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
    this.cart
      .getCart('bd3ae7bf-8aac-4894-a4e4-505e7e78b5e6')
      .subscribe((data) => {
        this.products = data;
        this.products.forEach((product: any) => {
          this.totalprice =
            this.totalprice + product.productPrice * product.cartQuantity;
        });
      });
  }
  addbutton(product: any): void {
    if (product.cartQuantity < product.productQuantity) {
      product.cartQuantity = product.cartQuantity + 1;
      this.cart
        .editCart('bd3ae7bf-8aac-4894-a4e4-505e7e78b5e6', product)
        .subscribe({
          next: (data) => {
            this.totalprice = 0;
            this.products.forEach((product: any) => {
              this.totalprice =
                this.totalprice + product.productPrice * product.cartQuantity;
            });
          },
        });
    }
  }
  minusbutton(product: any): void {
    if (product.cartQuantity > 1) {
      product.cartQuantity = product.cartQuantity - 1;
      this.cart
        .editCart('bd3ae7bf-8aac-4894-a4e4-505e7e78b5e6', product)
        .subscribe({
          next: (data) => {
            this.totalprice = 0;
            this.products.forEach((product: any) => {
              this.totalprice =
                this.totalprice + product.productPrice * product.cartQuantity;
            });
          },
        });
    }
  }
  deleteButton(product: any) {
    this.cart
      .removeFromCart('bd3ae7bf-8aac-4894-a4e4-505e7e78b5e6', product.productId)
      .subscribe({
        next: (data) => {
          this.cart
            .getCart('bd3ae7bf-8aac-4894-a4e4-505e7e78b5e6')
            .subscribe((data) => {
              this.products = data;
            });
          this.totalprice = 0;
          this.products.forEach((product: any) => {
            this.totalprice =
              this.totalprice + product.productPrice * product.cartQuantity;
          });
          this.route.navigate(['cart']);
        },
      });
  }
}
