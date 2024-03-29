import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string = "http://localhost:3000/products"
  products: any;
  constructor(public http:HttpClient) {
    this.getAllProducts().subscribe(products => {
      this.products = products;
    });
   }
   
  getAllProducts() {
    return this.http.get(this.baseUrl);
  }
  searchProducts(searchValue: string) {
    
    if (searchValue !== "" && this.products) {
      return this.products.filter((product: any) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else if(this.products) {
      return this.products;
    }
    else return [];
}}
