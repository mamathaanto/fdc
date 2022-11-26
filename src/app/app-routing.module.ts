import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
{path:'welcome',component:WelcomeComponent},
{path:'page',component:PageComponent},
{path:'cart',component:CartComponent},
{path:'products',component:ProductsComponent},
{path:'gallery',component:GalleryComponent},{
  path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
