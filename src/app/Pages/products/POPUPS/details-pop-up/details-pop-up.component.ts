import { UsersService } from 'src/app/services/users.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { product } from 'src/app/services/product';
import { WishlistPopUpComponent } from '../wishlist-pop-up/wishlist-pop-up.component';
import { CartPopUpComponent } from '../cart-pop-up/cart-pop-up.component';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { AlertPopUpComponent } from '../alert-pop-up/alert-pop-up.component';
@Component({
  selector: 'app-details-pop-up',
  templateUrl: './details-pop-up.component.html',
  styleUrls: ['./details-pop-up.component.css'],
})
export class DetailsPopUpComponent implements OnInit {
  constructor(
    private dialogRef: MatDialog,
    public wishlist: WishlistService,
    public UsersService: UsersService,
    public cart: CartService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: 0;
      name: '';
      price: 0;
      description: '';
      quantity: 0;
      totalWeight: 0;
      animalType: '';
      type: '';
      image: '';
    }
  ) {}
  ngOnInit(): void {
    this.UsersService.retreiveTokenData();
  }
  quantityNumber: string = '1';
  quantity: number = Number(this.quantityNumber);
  changeHandle() {
    this.quantity = Number(this.quantityNumber);

    if (this.quantity > this.data.quantity) {
      this.quantity = this.data.quantity;
      this.quantityNumber = this.quantity.toString();
    } else if (this.quantity < 1) {
      this.quantity = 1;
      this.quantityNumber = this.quantity.toString();
    }
  }
  addbutton(): void {
    if (this.quantity < this.data.quantity) {
      this.quantity = this.quantity + 1;
      this.quantityNumber = this.quantity.toString();
    }
  }
  minusbutton(): void {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
      this.quantityNumber = this.quantity.toString();
    }
  }
  addtocart() {
    this.cart
      .isItemExist(this.UsersService.loggedinUser.userID, this.data.id)
      .subscribe({
        next: (data) => {
          this.dialogRef.open(AlertPopUpComponent, {
            data: { ...this.data, alertType: 'Cart' },
          });
        },
        error: (err) => {
          this.dialogRef.open(CartPopUpComponent, {
            data: this.data,
          });
          let addedproduct = {
            productId: this.data.id,
            cartQuantity: this.quantity,
          };

          this.cart
            .addToCart(this.UsersService.loggedinUser.userID, addedproduct)
            .subscribe();
        },
      });
  }
  addtowhishlist(): void {
    if (this.wishlist.addProductToWishlist(this.data))
      this.dialogRef.open(WishlistPopUpComponent, {
        data: this.data,
      });
    else {
      this.dialogRef.open(AlertPopUpComponent, {
        data: { ...this.data, alertType: 'whishlist' },
      });
    }
  }
}
