import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WishlistPopUpComponent } from '../POPUPS/wishlist-pop-up/wishlist-pop-up.component';
import { CartPopUpComponent } from '../POPUPS/cart-pop-up/cart-pop-up.component';
import { DetailsPopUpComponent } from '../POPUPS/details-pop-up/details-pop-up.component';
import { product } from 'src/app/services/product';

@Component({
  selector: 'app-card-column',
  templateUrl: './card-column.component.html',
  styleUrls: ['./card-column.component.css'],
})
export class CardColumnComponent {
  constructor(private dialogRef: MatDialog) {}
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

  addtowhishlist(): void {
    this.dialogRef.open(WishlistPopUpComponent, {
      data: this.product,
    });
  }
  addtocart(): void {
    this.dialogRef.open(CartPopUpComponent, {
      data: this.product,
    });
  }
  details(): void {
    this.dialogRef.open(DetailsPopUpComponent, {
      data: this.product,
    });
  }
}
