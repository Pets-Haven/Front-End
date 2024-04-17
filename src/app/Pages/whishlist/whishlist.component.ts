import { UsersService } from 'src/app/services/users.service';
import { product } from './../../services/product';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartPopUpComponent } from '../products/POPUPS/cart-pop-up/cart-pop-up.component';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css'],
})
export class WhishlistComponent implements OnInit {
  constructor(
    public wishlist: WishlistService,
    public cart: CartService,
    public UsersService: UsersService,
    public dialogRef: MatDialog
  ) {}
  products: any;
  ngOnInit(): void {
    this.products = this.wishlist.getWishlist();
    this.UsersService.retreiveTokenData();
  }
  deleteButton(id: number) {
    this.wishlist.removeFromWishlist(id);
    this.products = this.wishlist.getWishlist();
  }
  addtocart(product: any) {
    this.cart
      .isItemExist(this.UsersService.loggedinUser.userID, product.id)
      .subscribe({
        next: (data) => {
          this.dialogRef.open(CartPopUpComponent, {
            data: { ...product, alertType: 'Cart' },
          });
        },
        error: (err) => {
          this.wishlist.removeFromWishlist(product.id);
          this.dialogRef.open(CartPopUpComponent, {
            data: product,
          });
          let addedproduct = { productId: product.id, cartQuantity: 1 };

          this.cart
            .addToCart(this.UsersService.loggedinUser.userID, addedproduct)
            .subscribe();
          this.products = this.wishlist.getWishlist();
        },
      });
  }
}
