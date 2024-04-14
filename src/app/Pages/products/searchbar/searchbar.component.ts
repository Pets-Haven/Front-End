import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  searchValue: string = '';

  constructor(private productService: ProductsService, public route: Router) {}
  searchProducts() {
    this.route.navigate(['products/search', this.searchValue]);
  }
}
