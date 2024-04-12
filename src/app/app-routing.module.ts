import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductDetailsComponent } from './Pages/products/product-details/product-details.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register-new-user', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'products', redirectTo: 'products/category/0', pathMatch: 'full' },
  { path: 'products/details', component: ProductDetailsComponent },
  { path: 'products-details/:id', component: ProductDetailsComponent },
  {path:'products/category/:categoryid',component:ProductsComponent},
  {path:'products/search/:searchvalue',component:ProductsComponent},
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
