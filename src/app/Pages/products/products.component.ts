import { Component } from '@angular/core';
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

  
  getCurrentPageProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.TempProducts.slice(startIndex, endIndex);
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
