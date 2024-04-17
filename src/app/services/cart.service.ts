import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl: string = 'http://localhost:5031/api/Cart';

  constructor(public http: HttpClient) {}
  getCart(userId: string) {
    return this.http.get(`${this.baseUrl}?userId=${userId}`);
  }
  addToCart(userId: string, product: any) {
    return this.http.post(`${this.baseUrl}?userId=${userId}`, product);
  }
  removeFromCart(userId: string, productId: number) {
    return this.http.delete(
      `${this.baseUrl}?userId=${userId}&productId=${productId}`
    );
  }
  editCart(userId: string, product: any) {
    return this.http.put(`${this.baseUrl}?userId=${userId}`, product);
  }
  isItemExist(userId: string, productId: number) {
    return this.http.get(`${this.baseUrl}/${productId}?userId=${userId}`);
  }
}
