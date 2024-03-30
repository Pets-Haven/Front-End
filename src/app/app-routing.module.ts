import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Pages/products/products.component';
<<<<<<< HEAD
import { ProductDetailsComponent } from './Pages/products/product-details/product-details.component';

=======
import { SignupComponent } from './Pages/signup/signup.component';
import { SigninComponent } from './Pages/signin/signin.component';
>>>>>>> 34ba6a1535b05edd68b5d7815f589a3630afe0f2

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
