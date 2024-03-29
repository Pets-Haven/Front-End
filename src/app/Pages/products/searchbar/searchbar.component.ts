import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  searchValue: string = '';
  @Output() searchResult = new EventEmitter<any>();

  constructor(private productService: ProductsService) {}

  searchProducts() {
    this.searchResult.emit(
      this.productService.searchProducts(this.searchValue)
    );
  }
}
