import { product } from './../../../services/product';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CartPopUpComponent } from '../POPUPS/cart-pop-up/cart-pop-up.component';
import { WishlistPopUpComponent } from '../POPUPS/wishlist-pop-up/wishlist-pop-up.component';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  userId:string='caa92dc2-3254-4b01-8dc7-0a7d71678497';
  constructor(
    public activeroute: ActivatedRoute,
    public dialogRef: MatDialog,
    public productservice: ProductsService,
    public cart: CartService,
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
    
    this.cart.isItemExist(this.userId,this.product.id).subscribe({
      next: (data) => {
        console.log("not found");
      },
      error: (err) => { 
        this.dialogRef.open(CartPopUpComponent, {
          data: this.product,
        });
        let addedproduct={productId:this.product.id,cartQuantity:this.quantity};
    
        this.cart.addToCart(this.userId,addedproduct).subscribe();

    }});
   
    
  }
  addtowhishlist() {
    this.dialogRef.open(WishlistPopUpComponent, {
      data: this.product,
    });
  }
}
