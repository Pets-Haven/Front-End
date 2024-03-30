import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'http://localhost:3000/products';
  products: any;
  constructor(public http: HttpClient) {
    this.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  getAllProducts() {
    return this.http.get(this.baseUrl);
  }
  getproductbyid(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
    // return this.products.filter((product: any) => product.id == id)[0];
  }
  searchProducts(searchValue: string) {
    if (searchValue !== '' && this.products) {
      return this.products.filter((product: any) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else if (this.products) {
      return this.products;
    } else return [];
  }
  filterProductsbycategory(id: string) {
    console.log("sobeh");
    if (id != '0') {
      return this.http.get(`${this.baseUrl}?categoryId=${id}`);
     // return this.products.filter((product: any) => product.categoryId == id);
    } 
  else return this.getAllProducts();

}
}
