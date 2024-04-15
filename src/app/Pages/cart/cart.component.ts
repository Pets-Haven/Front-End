import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products:any;
  constructor(public cart:CartService,public userservice:UsersService) {}
  ngOnInit(): void {
    this.cart.getCart("caa92dc2-3254-4b01-8dc7-0a7d71678497").subscribe((data)=>{
      this.products=data
    })
   // console.log(this.userservice.loggedinUser.userID);
  }
  addbutton(product:any): void {
    if(product.cartQuantity < product.productQuantity){
    product.cartQuantity  =product.cartQuantity +  1;
    this.cart.editCart("caa92dc2-3254-4b01-8dc7-0a7d71678497",product).subscribe();
    }
  }
  minusbutton(product:any): void {
    if (product.cartQuantity > 1) {
    product.cartQuantity  =product.cartQuantity -  1;
    this.cart.editCart("caa92dc2-3254-4b01-8dc7-0a7d71678497",product).subscribe();
    }
  }
  deleteButton(product:any){
    this.cart.removeFromCart("caa92dc2-3254-4b01-8dc7-0a7d71678497",product.productId).subscribe();
  }
}
