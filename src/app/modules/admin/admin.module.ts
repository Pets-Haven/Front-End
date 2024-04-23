import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { ProductsManagmentComponent } from './products-managment/products-managment.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    ProductsManagmentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent],

})
export class AdminModule { }
