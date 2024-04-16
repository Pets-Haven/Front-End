import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WishlistPopUpComponent } from '../POPUPS/wishlist-pop-up/wishlist-pop-up.component';
import { CartPopUpComponent } from '../POPUPS/cart-pop-up/cart-pop-up.component';
import { DetailsPopUpComponent } from '../POPUPS/details-pop-up/details-pop-up.component';
import { product } from 'src/app/services/product';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-card-column',
  templateUrl: './card-column.component.html',
  styleUrls: ['./card-column.component.css'],
})
export class CardColumnComponent {
  constructor(
    private dialogRef: MatDialog,
    public cart: CartService,
    public wishlist: WishlistService
  ) {}
  @Input() product: any;
  userId: string = 'caa92dc2-3254-4b01-8dc7-0a7d71678497';

  addtowhishlist(product: any): void {
    if (this.wishlist.addProductToWishlist(product))
      this.dialogRef.open(WishlistPopUpComponent, {
        data: this.product,
      });
    else {
      console.log('sobeh will handle this ');
    }
  }
  addtocart() {
    this.cart.isItemExist(this.userId, this.product.id).subscribe({
      next: (data) => {
        console.log('not found');
      },
      error: (err) => {
        this.dialogRef.open(CartPopUpComponent, {
          data: this.product,
        });
        let addedproduct = { productId: this.product.id, cartQuantity: 1 };

        this.cart.addToCart(this.userId, addedproduct).subscribe();
      },
    });
  }
  details(): void {
    this.dialogRef.open(DetailsPopUpComponent, {
      data: this.product,
    });
  }
}
