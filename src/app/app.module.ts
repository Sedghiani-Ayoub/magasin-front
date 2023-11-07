import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CreateProductComponent } from './vues/products/create-product/create-product.component';
import { ListProductComponent } from './vues/products/list-product/list-product.component';
import { UpdateProductComponent } from './vues/products/update-product/update-product.component';
import { CommentProductComponent } from './vues/products/comment-product/comment-product.component';
import { authentificationProvider } from './services/interceptorauth.service';
import { LoginComponent } from './vues/login/login.component';
import { SubscribeComponent } from './vues/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CreateProductComponent,
    ListProductComponent,
    UpdateProductComponent,
    CommentProductComponent,
    LoginComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [authentificationProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
