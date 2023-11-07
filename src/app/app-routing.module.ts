import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vues/login/login.component';
import { CommentProductComponent } from './vues/products/comment-product/comment-product.component';
import { CreateProductComponent } from './vues/products/create-product/create-product.component';
import { ListProductComponent } from './vues/products/list-product/list-product.component';
import { UpdateProductComponent } from './vues/products/update-product/update-product.component';
import { SubscribeComponent } from './vues/subscribe/subscribe.component';

const routes: Routes = [
  {path:"create-product",component:CreateProductComponent},
  {path:"list-product",component:ListProductComponent},
  {path:"update-product/:id",component:UpdateProductComponent},
  {path:"comment-product/:id",component:CommentProductComponent},
  {path:"login",component:LoginComponent},
  {path:"subscribe",component:SubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
