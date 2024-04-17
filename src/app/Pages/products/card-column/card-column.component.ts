import { UsersService } from 'src/app/services/users.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WishlistPopUpComponent } from '../POPUPS/wishlist-pop-up/wishlist-pop-up.component';
import { CartPopUpComponent } from '../POPUPS/cart-pop-up/cart-pop-up.component';
import { DetailsPopUpComponent } from '../POPUPS/details-pop-up/details-pop-up.component';
import { product } from 'src/app/services/product';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { AlertPopUpComponent } from '../POPUPS/alert-pop-up/alert-pop-up.component';

@Component({
  selector: 'app-card-column',
  templateUrl: './card-column.component.html',
  styleUrls: ['./card-column.component.css'],
})
export class CardColumnComponent implements OnInit {
  constructor(
    private dialogRef: MatDialog,
    public cart: CartService,
    public UsersService: UsersService,
    public wishlist: WishlistService
  ) {}
  ngOnInit(): void {
    this.UsersService.retreiveTokenData();
  }
  @Input() product: any;

  addtowhishlist(product: any): void {
    if (this.wishlist.addProductToWishlist(product))
      this.dialogRef.open(WishlistPopUpComponent, {
        data: this.product,
      });
    else {
      this.dialogRef.open(AlertPopUpComponent, {
        data: { ...this.product, alertType: 'Whishlist' },
      });
    }
  }
  addtocart() {
    this.cart
      .isItemExist(this.UsersService.loggedinUser.userID, this.product.id)
      .subscribe({
        next: (data) => {
          this.dialogRef.open(AlertPopUpComponent, {
            data: { ...this.product, alertType: 'Cart' },
          });
        },
        error: (err) => {
          this.dialogRef.open(CartPopUpComponent, {
            data: this.product,
          });
          let addedproduct = { productId: this.product.id, cartQuantity: 1 };

          this.cart
            .addToCart(this.UsersService.loggedinUser.userID, addedproduct)
            .subscribe();
        },
      });
  }
  details(): void {
    this.dialogRef.open(DetailsPopUpComponent, {
      data: this.product,
    });
  }
}
