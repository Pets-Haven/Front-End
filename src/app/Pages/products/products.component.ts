import { Component } from '@angular/core';
import { product } from 'src/app/services/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any;
  sort: string = "Default";
  searchValue: string = "";
  TempProducts: any;
  currentPage: number = 1; 
  itemsPerPage: number = 6; 
  showCardWithoutContent:boolean=false;

  constructor(public service: ProductsService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data) => {
      this.products = data;
      this.TempProducts = [...this.products];
    });
  }
  

  toggleCardType(flag: boolean) {
    this.showCardWithoutContent = flag;
  }

  Sortproducts() {
    if (this.sort == "LH") {
      this.TempProducts.sort((a: any, b: any) => a.price - b.price);
    } else if (this.sort == "HL") {
      this.TempProducts.sort((a: any, b: any) => b.price - a.price);
    } else {
      this.TempProducts.sort((a: any, b: any) => a.id - b.id);
    }
  }

  SearchProducts(products: any) {
    this.TempProducts=[...products];
    this.currentPage=1;
  }
  getCategories(){
    if (this.TempProducts && this.TempProducts.length > 0) {
    const uniqueCategories = new Set(this.TempProducts.map((product:product) => product.type));
    return Array.from(uniqueCategories);
    }
    else{
      return [];
    }
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
  else
    return 1;
  }
}
