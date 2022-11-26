import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PageComponent } from './page/page.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { H1Component } from './h1/h1.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    WelcomeComponent,
    PageComponent,
    CartComponent,
    ProductsComponent,
    H1Component,
    GalleryComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    ToastrModule.forRoot({positionClass:'toast-bottom-center',timeOut:7000}),
    HttpClientModule ,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
