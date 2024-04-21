import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { product } from 'src/app/services/product';
import { MatDialog } from '@angular/material/dialog';
import { WishlistPopUpComponent } from '../POPUPS/wishlist-pop-up/wishlist-pop-up.component';
import { CartPopUpComponent } from '../POPUPS/cart-pop-up/cart-pop-up.component';
import { DetailsPopUpComponent } from '../POPUPS/details-pop-up/details-pop-up.component';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { AlertPopUpComponent } from '../POPUPS/alert-pop-up/alert-pop-up.component';
@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.css'],
})
export class CardRowComponent implements OnInit {
  constructor(
    private dialogRef: MatDialog,
    public cart: CartService,
    public UsersService: UsersService,
    public wishlist: WishlistService
  ) {}
  ngOnInit(): void {
    this.UsersService.retreiveTokenData();
  }
  @Input() product: product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    qunantity: 0,
    totalWeight: 0,
    animalType: '',
    type: '',
    image: '',
  };
  addtowhishlist(product: any): void {
    this.cart
      .isItemExist(this.UsersService.loggedinUser.userID, this.product.id)
      .subscribe({
        next: (data) => {
          this.dialogRef.open(AlertPopUpComponent, {
            data: { ...this.product, alertType: 'Cart' },
          });
        },
        error: (err) => {
          if (this.wishlist.addProductToWishlist(product))
            this.dialogRef.open(WishlistPopUpComponent, {
              data: this.product,
            });
          else {
            this.dialogRef.open(AlertPopUpComponent, {
              data: { ...this.product, alertType: 'Whishlist' },
            });
          }
        },
      });
  }
  details(): void {
    this.dialogRef.open(DetailsPopUpComponent, {
      data: this.product,
    });
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
          this.wishlist.removeFromWishlist(this.product.id);
          let addedproduct = { productId: this.product.id, cartQuantity: 1 };

          this.cart
            .addToCart(this.UsersService.loggedinUser.userID, addedproduct)
            .subscribe();
        },
      });
  }
}
