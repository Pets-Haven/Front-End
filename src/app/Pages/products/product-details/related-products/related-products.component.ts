import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css']
})
export class RelatedProductsComponent {
  products = [
    { name: 'Fusion Backpack', price: 45, imageSrc: 'assets/Images/1.webp' },
    { name: 'Savvy Shoulder Tote', price: 45, imageSrc: 'assets/Images/1.webp' },
    { name: 'Voyage Yoga Bag', price: 45, imageSrc: 'assets/Images/1.webp' },
    { name: 'Wayfarer Messenger Bag', price: 45, imageSrc: 'assets/Images/1.webp' },
  ];
}
