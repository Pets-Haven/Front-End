import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  quantityNumber: string = '1';
  quantity: number = Number(this.quantityNumber);
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
}
