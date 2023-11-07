import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products?:Observable<Product[]>;


  constructor(private service:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.products=this.service.getProducts();
  }
  delete(id:any){
    this.service.deleteProduct(id).subscribe(
      data=> this.products=this.service.getProducts()
      ,
      console=> console.log(console.error())
    );
}
update(id:any){
  this.router.navigate(['update-product',id]);
  //alert(id)
}
comment(id:any){
  this.router.navigate(['comment-product',id]);
}
}
