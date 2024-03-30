import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css'],
})
export class RelatedProductsComponent {
  constructor(public productsService: ProductsService) {}
  @Input() categoryid: any = '';
  relatedProducts: any;
  ngOnInit(): void {
     this.productsService.filterProductsbycategory(
      this.categoryid
    ).subscribe((data) => {
      this.relatedProducts = data;
    });
  }
}
