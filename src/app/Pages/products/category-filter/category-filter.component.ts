import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css'],
})
export class CategoryFilterComponent implements OnInit {
  constructor(
    public productsService: ProductsService,
    public categoryService: CategoriesService
  ) {}
  categories: any;

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((Categories) => {
      this.categories = Categories;
    });
  }

}
