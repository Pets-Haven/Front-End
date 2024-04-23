import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsManagmentComponent } from './products-managment/products-managment.component';

const routes: Routes = [
  {path: 'products', component: ProductsManagmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
