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
    this.service.getAllproducts().subscribe(data => {
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

  SearchProducts() {
    if (this.searchValue != "") {
      this.TempProducts = this.products.filter((product: any) => product.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    } else {
      this.TempProducts = [...this.products];
    }
    this.currentPage = 1; 
  }
  getCategories(){
    
    const uniqueCategories = new Set(this.TempProducts.map((product:product) => product.type));
    return Array.from(uniqueCategories);
     
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
    return Math.ceil(this.TempProducts.length / this.itemsPerPage);
  }
}
