import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private storageKey = 'wishlist';
  constructor() { }
  getWishlist(): any[] {
    const wishlistJson = localStorage.getItem(this.storageKey);
    return wishlistJson ? JSON.parse(wishlistJson) : [];
  }
  addProductToWishlist(product: any): boolean {
    const wishlist = this.getWishlist();
    if (!wishlist.find((p: any) => p.id === product.id)) {
      wishlist.push(product);
      this.saveWishlist(wishlist);
      return true;
    }
    return false;
    
  }
  saveWishlist(wishlist: any[]): void {
    const wishlistJson = JSON.stringify(wishlist);
    localStorage.setItem(this.storageKey, wishlistJson);
  }
  removeFromWishlist(itemId: string): void {
    let wishlist = this.getWishlist();
    wishlist = wishlist.filter(item => item.id !== itemId);
    this.saveWishlist(wishlist);
  }
}
