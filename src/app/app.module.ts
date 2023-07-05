import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailComponent,
    CategoriesComponent,
    NaviComponent,
    IletisimComponent,
    HakkimizdaComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
