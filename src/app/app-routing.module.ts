import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductDetailsComponent } from './Pages/products/product-details/product-details.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { SignupComponent } from './Pages/signup/signup.component';

const routes: Routes = [
  { path: 'register-new-user', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'products', redirectTo: 'products/category/0', pathMatch: 'full' },
  { path: 'products/details', component: ProductDetailsComponent },
  { path: 'products-details/:id', component: ProductDetailsComponent },
  {path:'products/category/:categoryid',component:ProductsComponent},
  {path:'products/search/:searchvalue',component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
