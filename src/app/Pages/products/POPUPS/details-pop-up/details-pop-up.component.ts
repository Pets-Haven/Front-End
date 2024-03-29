import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { product } from 'src/app/services/product';
import { WishlistPopUpComponent } from '../wishlist-pop-up/wishlist-pop-up.component';
import { CartPopUpComponent } from '../cart-pop-up/cart-pop-up.component';
@Component({
  selector: 'app-details-pop-up',
  templateUrl: './details-pop-up.component.html',
  styleUrls: ['./details-pop-up.component.css'],
})
export class DetailsPopUpComponent {
  constructor(
    private dialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: 0;
      name: '';
      price: 0;
      description: '';
      qunantity: 0;
      totalWeight: 0;
      animalType: '';
      type: '';
      image: '';
    }
  ) {}
  quantityNumber: string = '1';
  quantity: number = Number(this.quantityNumber);
  addbutton(): void {
    this.quantity = this.quantity + 1;
    this.quantityNumber = this.quantity.toString();
  }
  minusbutton(): void {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
      this.quantityNumber = this.quantity.toString();
    }
  }
  addtocart() {
    this.dialogRef.open(CartPopUpComponent, {
      data: this.data,
    });
  }
  addtowhishlist() {
    this.dialogRef.open(WishlistPopUpComponent, {
      data: this.data,
    });
  }
}
