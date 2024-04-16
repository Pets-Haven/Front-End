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
  userId:string='caa92dc2-3254-4b01-8dc7-0a7d71678497';
  constructor(
    public cart: CartService,
    public userservice: UsersService,
    public route: Router
  ) {}
  ngOnInit(): void {
   
    this.cart
      .getCart(this.userId)
      .subscribe((data) => {
        this.products = data;
        this.products.forEach((product: any) => {
          this.totalprice =
            this.totalprice + product.productPrice * product.cartQuantity;
            
        });
      });
  }
  changeHandle(product: any) {
    if(product.cartQuantity>product.productQuantity){
      product.cartQuantity=product.productQuantity
    }
  }
  addbutton(product: any): void {
    if (product.cartQuantity < product.productQuantity) {
      product.cartQuantity = product.cartQuantity + 1;
      this.cart
        .editCart(this.userId, product)
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
        .editCart(this.userId, product)
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
      .removeFromCart(this.userId, product.productId)
      .subscribe({
        next: (data) => {
          this.products=this.products.filter((x:any)=>x.productId!=product.productId);
          this.totalprice = 0;
          this.products.forEach((product: any) => {
            this.totalprice =
              this.totalprice + product.productPrice * product.cartQuantity;
          });
        },
      });
  }
}
