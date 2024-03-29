import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductDetailsComponent } from './Pages/products/product-details/product-details.component';


const routes: Routes = [
  {path: 'register-new-user', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path:'products',component:ProductsComponent},
  {path: 'products/details',component:ProductDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
