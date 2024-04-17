import { UsersService } from 'src/app/services/users.service';
import { product } from './../../../services/product';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CartPopUpComponent } from '../POPUPS/cart-pop-up/cart-pop-up.component';
import { WishlistPopUpComponent } from '../POPUPS/wishlist-pop-up/wishlist-pop-up.component';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { AlertPopUpComponent } from '../POPUPS/alert-pop-up/alert-pop-up.component';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    public activeroute: ActivatedRoute,
    public dialogRef: MatDialog,
    public productservice: ProductsService,
    public cart: CartService,
    public wishlist: WishlistService,
    public UsersService: UsersService,
    public categoryService: CategoriesService
  ) {}
  productid: any;
  product: any;
  quantityNumber: string = '1';
  quantity: number = Number(this.quantityNumber);
  category: any;
  ngOnInit(): void {
    this.UsersService.retreiveTokenData();
    this.activeroute.params.subscribe((params) => {
      this.productid = params['id'];
      this.productservice.getproductbyid(this.productid).subscribe((data) => {
        this.product = data;
      });
    });
  }

  changeHandle() {
    this.quantity = Number(this.quantityNumber);
    if (this.quantity > this.product.quantity) {
      this.quantity = this.product.quantity;
      this.quantityNumber = this.quantity.toString();
    } else if (this.quantity < 1) {
      this.quantity = 1;
      this.quantityNumber = this.quantity.toString();
    }
  }
  addbutton(): void {
    if (this.quantity < this.product.quantity) {
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
          let addedproduct = {
            productId: this.product.id,
            cartQuantity: this.quantity,
          };

          this.cart
            .addToCart(this.UsersService.loggedinUser.userID, addedproduct)
            .subscribe();
        },
      });
  }
  addtowhishlist(): void {
    if (this.wishlist.addProductToWishlist(this.product))
      this.dialogRef.open(WishlistPopUpComponent, {
        data: this.product,
      });
    else {
      this.dialogRef.open(AlertPopUpComponent, {
        data: { ...this.product, alertType: 'whislist' },
      });
    }
  }
}
