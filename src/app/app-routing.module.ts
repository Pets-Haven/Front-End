import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductDetailsComponent } from './Pages/products/product-details/product-details.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { CartComponent } from './Pages/cart/cart.component';
import { WhishlistComponent } from './Pages/whishlist/whishlist.component';
import { ProfileComponent } from './modules/profile/profile/profile.component'; // Import the ProfileComponent
import { AdminComponent } from './modules/admin/admin.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { ProductsManagmentComponent } from './modules/admin/products-managment/products-managment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register-new-user', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'products', redirectTo: 'products/category/0', pathMatch: 'full' },
  { path: 'products/details', component: ProductDetailsComponent },
  { path: 'products-details/:id', component: ProductDetailsComponent },
  { path: 'products/category/:categoryid', component: ProductsComponent },
  { path: 'products/search/:searchvalue', component: ProductsComponent },
  { path: 'Account', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent }, // Use the ProfileComponent in the routes

  {
    path: 'products/search',
    redirectTo: 'products/category/0',
    pathMatch: 'full',
  },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'whishlist', component: WhishlistComponent },
  {
    path: 'dashboard',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ProductsManagmentComponent
      }
    ],    
  },  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
