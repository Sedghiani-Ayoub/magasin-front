import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {


  id?:number;
  product:Product= new Product;

  constructor(private service:ProductService,private sniper:ActivatedRoute,private route:Router){}

  ngOnInit(): void {
    this.id = this.sniper.snapshot.params['id'];
    this.service.getProduct(this.id).subscribe(
      data => this.product= data
      ,
      error => console.log(error)
    );
  }
  onSubmit(){

    /*this.service.updateProduct(this.id,this.product).subscribe(
      data => this.route.navigate(['list-product'])
      ,
      error => console.log(error));
      */
  }
}
