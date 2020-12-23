import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CateComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './product-not-found/product-not-found.component';
import { ProductDetailComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CateComponent,
    ProductComponent,
    PagenotfoundComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }