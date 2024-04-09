import { product } from './../../../services/product';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CartPopUpComponent } from '../POPUPS/cart-pop-up/cart-pop-up.component';
import { WishlistPopUpComponent } from '../POPUPS/wishlist-pop-up/wishlist-pop-up.component';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';
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
    public categoryService: CategoriesService
  ) {}
  productid: any;
  product: any;
  quantityNumber: string = '1';
  quantity: number = Number(this.quantityNumber);
  category: any;
  ngOnInit(): void {
    this.activeroute.params.subscribe((params) => {
      this.productid = params['id'];
      this.productservice.getproductbyid(this.productid).subscribe((data) => {
        this.product = data;
      });
    });
  }

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
      data: this.product,
    });
  }
  addtowhishlist() {
    this.dialogRef.open(WishlistPopUpComponent, {
      data: this.product,
    });
  }
}
