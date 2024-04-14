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
  currentPage: number = 1;
  itemsPerPage: number = 6;
  showCardWithoutContent: boolean = false;

  constructor(public service: ProductsService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let urlstring: any;
      if (params['searchvalue']) {
        urlstring = params['searchvalue'];
        this.service.SearchProducts(urlstring).subscribe((data: any) => {
          this.products = data;
        });
      } else if (params['categoryid']) {
        urlstring = params['categoryid'];
        this.service
          .filterProductsbycategory(urlstring)
          .subscribe((data: any) => {
            this.products = data;
          });
      } else {
        this.service.getAllProducts().subscribe((data: any) => {
          this.products = data;
        });
      }
    });
  }

  toggleCardType(flag: boolean) {
    this.showCardWithoutContent = flag;
  }

  Sortproducts() {
    if (this.sort == 'LH') {
      this.products.sort((a: any, b: any) => a.price - b.price);
    } else if (this.sort == 'HL') {
      this.products.sort((a: any, b: any) => b.price - a.price);
    } else {
      this.products.sort((a: any, b: any) => a.id - b.id);
    }
  }

  getCurrentPageProducts(): product[] {
    if (this.products && this.products.length > 0) {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.products.slice(startIndex, endIndex);
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
    if (this.products && this.products.length > 0)
      return Math.ceil(this.products.length / this.itemsPerPage);
    else return 1;
  }
}
