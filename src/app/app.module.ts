import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideMenuComponent } from './components/navbar/aside-menu/aside-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureAreaComponent } from './components/feature-area/feature-area.component';
import { SearchHomeIconComponent } from './components/navbar/search-home-icon/search-home-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { AsideCartComponent } from './components/navbar/aside-cart/aside-cart.component';
import { ProductsComponent } from './Pages/products/products.component';
import { CardRowComponent } from './Pages/products/card-row/card-row.component';
import { CardColumnComponent } from './Pages/products/card-column/card-column.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishlistPopUpComponent } from './Pages/products/POPUPS/wishlist-pop-up/wishlist-pop-up.component';
import { CartPopUpComponent } from './Pages/products/POPUPS/cart-pop-up/cart-pop-up.component';
import { DetailsPopUpComponent } from './Pages/products/POPUPS/details-pop-up/details-pop-up.component';
import { PageHeaderAreaComponent } from './components/page-header-area/page-header-area.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { SigninComponent } from './Pages/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideMenuComponent,
    SearchHomeIconComponent,
    AsideCartComponent,
    ProductsComponent,
    CardRowComponent,
    CardColumnComponent,
    WishlistPopUpComponent,
    CartPopUpComponent,
    DetailsPopUpComponent,
    FeatureAreaComponent,
    PageHeaderAreaComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
