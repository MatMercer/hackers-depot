import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule, Pipe, PipeTransform} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlinkingCharacterComponent } from './blinking-character/blinking-character.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './products/product/product.component';
import { ProductInfoComponent } from './products/product-info/product-info.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import {ShoppingcartService} from './shoppingcart/shoppingcart.service';


export const routerConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/:id',
    component: ProductInfoComponent
  },
  {
    path: 'signup',
    component: SignUpComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

/* From https://stackoverflow.com/a/38037914/7308020 */
@Pipe({name: 'safeUrl'})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

// export const routerConfig: Routes = [
//   {
//     path: 'home',
//     component: HomeComponent
//   },
//   {
//     path: 'about',
//     component: AboutComponent
//   },
//   {
//     path: 'courses',
//     component: CoursesComponent
//   },
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },
//   {
//     path: '**',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlinkingCharacterComponent,
    HomeComponent,
    ProductsComponent,
    SignUpComponent,
    LoginComponent,
    ContactComponent,
    ProductComponent,
    ProductInfoComponent,
    SafeUrlPipe,
    FooterComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService,
    ShoppingcartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
