import { Component } from '@angular/core';
import { product } from 'src/app/services/product';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any;
  sort: string = 'Default';
  searchValue: string = '';
  TempProducts: any;
  currentPage: number = 1;
  itemsPerPage: number = 6;
  showCardWithoutContent: boolean = false;
  categoryId:string='0'

  constructor(public service: ProductsService,public route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     this.categoryId= params['category']; 
   

    
   
  
      
       this.service.filterProductsbycategory(this.categoryId).subscribe((data:any) => {
        this.products = data;
        this.TempProducts = [...this.products];
      });

      console.log(this.categoryId);
      console.log(this.service.filterProductsbycategory(this.categoryId));
    });
    
  }

  toggleCardType(flag: boolean) {
    this.showCardWithoutContent = flag;
  }

  Sortproducts() {
    if (this.sort == 'LH') {
      this.TempProducts.sort((a: any, b: any) => a.price - b.price);
    } else if (this.sort == 'HL') {
      this.TempProducts.sort((a: any, b: any) => b.price - a.price);
    } else {
      this.TempProducts.sort((a: any, b: any) => a.id - b.id);
    }
  }

  SearchProducts(products: any) {
    this.TempProducts = [...products];
    this.currentPage = 1;
  }
  filterByCategory(categoryId: string) {
    return this.service.filterProductsbycategory(categoryId);
  }
  getCurrentPageProducts(): product[] {
    if (this.TempProducts && this.TempProducts.length > 0) {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.TempProducts.slice(startIndex, endIndex);
    } else {
      return [];
    }
  }

  onNextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  totalPages(): number {
    if (this.TempProducts && this.TempProducts.length > 0)
      return Math.ceil(this.TempProducts.length / this.itemsPerPage);
    else return 1;
  }
}
