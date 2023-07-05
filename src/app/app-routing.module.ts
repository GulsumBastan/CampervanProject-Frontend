import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';


const routes: Routes = [
{path:"",component:HomePageComponent},
{ path: 'product-detail/:categoryId', component: ProductDetailComponent },
{ path: 'hakkimizda', component: HakkimizdaComponent },
{ path: 'iletisim', component: IletisimComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
