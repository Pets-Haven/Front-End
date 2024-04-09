import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'http://localhost:5031/api/product';
  products: any;
  constructor(public http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get(this.baseUrl);
  }
  getproductbyid(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  /*searchProducts(searchValue: string) {
    if (searchValue !== '' && this.products) {
      return this.products.filter((product: any) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else if (this.products) {
      return this.products;
    } else return [];
  }*/
  SearchProducts(searchValue: string) {
    return this.http.get(`${this.baseUrl}/${searchValue}`);
  }
  filterProductsbycategory(id: number) {
    if (id != 0) {
      return this.http.get(`${this.baseUrl}/category/${id}`);
    } 
  else return this.getAllProducts();

}
}
