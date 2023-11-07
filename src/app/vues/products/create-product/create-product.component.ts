import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Product= new Product;

  constructor(private service:ProductService,private router:Router){}
  //message?:string;
  //constructor() { }

  //ngOnInit(): void {
    //this.message='message from angular component'
 // }
 ngOnInit(): void {
   
 }
 onSubmit(){
  this.service.createProduct(this.product).subscribe(
  data => this.router.navigate(['list-product'])
  );
  //alert('add product');
 }

}
