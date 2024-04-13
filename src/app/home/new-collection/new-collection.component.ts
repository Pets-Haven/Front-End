import { CategoriesService } from './../../services/categories.service';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css']
})
export class NewCollectionComponent {
  constructor(public productsService: ProductsService) {}
  @Input() categoryid: number = 0;
  relatedProducts: any;
  ngOnInit(): void {
    this.productsService.filterProductsbycategory(
      this.categoryid
    ).subscribe((data) => {
      this.relatedProducts = data;
    });
  }
}
