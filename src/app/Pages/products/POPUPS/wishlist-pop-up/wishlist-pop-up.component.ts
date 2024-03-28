import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { product } from 'src/app/services/product';

@Component({
  selector: 'app-wishlist-pop-up',
  templateUrl: './wishlist-pop-up.component.html',
  styleUrls: ['./wishlist-pop-up.component.css'],
})
export class WishlistPopUpComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: 0;
      name: '';
      price: 0;
      description: '';
      qunantity: 0;
      totalWeight: 0;
      animalType: '';
      type: '';
      image: '';
    }
  ) {}
}
