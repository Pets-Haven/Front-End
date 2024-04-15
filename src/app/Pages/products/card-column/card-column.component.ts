import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WishlistPopUpComponent } from '../POPUPS/wishlist-pop-up/wishlist-pop-up.component';
import { CartPopUpComponent } from '../POPUPS/cart-pop-up/cart-pop-up.component';
import { DetailsPopUpComponent } from '../POPUPS/details-pop-up/details-pop-up.component';
import { product } from 'src/app/services/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card-column',
  templateUrl: './card-column.component.html',
  styleUrls: ['./card-column.component.css'],
})
export class CardColumnComponent {
  constructor(private dialogRef: MatDialog,public cart:CartService) {}
  @Input() product: any;

  addtowhishlist(): void {
    this.dialogRef.open(WishlistPopUpComponent, {
      data: this.product,
    });
  }
  addtocart(): void {
    this.dialogRef.open(CartPopUpComponent, {
      data: this.product,
    });
    let addedproduct={productId:this.product.id,cartQuantity:1};
    this.cart.addToCart("caa92dc2-3254-4b01-8dc7-0a7d71678497",addedproduct).subscribe();
    console.log(addedproduct);
  }
  details(): void {
    this.dialogRef.open(DetailsPopUpComponent, {
      data: this.product,
    });

  }
}
