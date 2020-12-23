import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CateComponent } from './category/category.component';
import { PagenotfoundComponent } from './product-not-found/product-not-found.component';
import { ProductComponent } from './product/product.component';
import {ProductDetailComponent} from './product-details/product-details.component';

const routes: Routes = [
  {path:'',redirectTo:'categeory',pathMatch:'full'},
{path:'cate',component:CateComponent},
{path:'cate',component:CateComponent},
{path:'products',component:ProductComponent},
{path:'products/:id',component:ProductDetailComponent},
{path:"**",component:PagenotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }