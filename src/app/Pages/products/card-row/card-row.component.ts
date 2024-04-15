import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { product } from 'src/app/services/product';
import { MatDialog } from '@angular/material/dialog';
import { WishlistPopUpComponent } from '../POPUPS/wishlist-pop-up/wishlist-pop-up.component';
import { CartPopUpComponent } from '../POPUPS/cart-pop-up/cart-pop-up.component';
import { DetailsPopUpComponent } from '../POPUPS/details-pop-up/details-pop-up.component';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.css'],
})
export class CardRowComponent {
  constructor(private dialogRef: MatDialog,public cart:CartService) {}
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
  details(): void {
    this.dialogRef.open(DetailsPopUpComponent, {
      data: this.product,
    });
  }
  addtocart() {
    this.dialogRef.open(CartPopUpComponent, {
      data: this.product,
    });
    let addedproduct={productId:this.product.id,cartQuantity:1};
    this.cart.addToCart("caa92dc2-3254-4b01-8dc7-0a7d71678497",addedproduct).subscribe();
    console.log(addedproduct);
  }
}
