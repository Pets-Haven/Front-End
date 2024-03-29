import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { product } from 'src/app/services/product';
@Component({
  selector: 'app-cart-pop-up',
  templateUrl: './cart-pop-up.component.html',
  styleUrls: ['./cart-pop-up.component.css'],
})
export class CartPopUpComponent implements OnInit {
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

  ngOnInit(): void {
    console.log(this.data);
  }
}
