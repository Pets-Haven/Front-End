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
    public dialogRef: MatDialog
  ) {}
  products: any;
  userId: string = 'bd3ae7bf-8aac-4894-a4e4-505e7e78b5e6';
  ngOnInit(): void {
    this.products = this.wishlist.getWishlist();
  }
  deleteButton(id: number) {
    this.wishlist.removeFromWishlist(id);
    this.products = this.wishlist.getWishlist();
  }
  addtocart(product: any) {
    this.cart.isItemExist(this.userId, product.id).subscribe({
      next: (data) => {
        console.log('not found');
      },
      error: (err) => {
        this.wishlist.removeFromWishlist(product.id);
        this.dialogRef.open(CartPopUpComponent, {
          data: product,
        });
        let addedproduct = { productId: product.id, cartQuantity: 1 };

        this.cart.addToCart(this.userId, addedproduct).subscribe();
        this.products = this.wishlist.getWishlist();
      },
    });
  }
}
