import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { AsideMenuComponent } from './components/navbar/aside-menu/aside-menu.component';
import { SigninComponent } from './components/signin/signin.component';
import { PageHeaderAreaComponent } from './components/page-header-area/page-header-area.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureAreaComponent } from './components/feature-area/feature-area.component';
import { SearchHomeIconComponent } from './components/navbar/search-home-icon/search-home-icon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    AsideMenuComponent,
    SigninComponent,
    PageHeaderAreaComponent,
    FeatureAreaComponent,
    SearchHomeIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
