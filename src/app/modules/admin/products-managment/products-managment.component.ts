import { Component } from '@angular/core';
import { DashboardProductsService } from 'src/app/services/dashboard-products.service';

@Component({
  selector: 'app-products-managment',
  templateUrl: './products-managment.component.html',
  styleUrls: ['../admin.component.css']
})
export class ProductsManagmentComponent {

  allProducts: any;
  constructor(private products:DashboardProductsService) {}
  ngOnInit() {
    this.products.getAllProducts().subscribe((res: any) => {
      this.allProducts = res;
    });
  }
}
